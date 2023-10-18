"use client";
import { compoData } from "../../data";
import { createUseStyles, jss } from "react-jss";
import styled from "styled-components";
import DynamicStyledComponent from "../components/DynamicStyledComponent";

export default function Home() {
  const { templates, available_media_devices } = compoData;
  // const jss = create();
  // jss.setup(preset());
  // const sheet = jss.createStyleSheet({

  //   [`@media (min-width: ${minWidth}px)`]: {
  //       color: 'red',
  //     },

  //   }
  // }).attach();
  //find parent children
  const modifiedData = (templates) => {
    const modifiedData = [];

    for (const template of templates) {
      const { elements, ...others } = template;

      const findChildren = (parentId) => {
        const children = [];
        for (const item of elements) {
          if (item.parent_id === parentId) {
            const childItem = { ...item, children: findChildren(item.id) };
            children.push(childItem);
          }
        }
        return children.length > 0 ? children : null;
      };

      for (const item of elements) {
        if (!item.parent_id) {
          const newItem = {
            ...item,
            ...others,
            children: findChildren(item.id),
          };
          modifiedData.push(newItem);
        }
      }
    }

    return modifiedData;
  };

  const newModifiedData = modifiedData(templates);

  const renderComponent = (component) => {
    const {
      id,
      tag: Tag,
      attributes,
      dynamic_content,
      static_content,
      children,
    } = component;
    const { styleMedia } = attributes;
    const dex = jss
      .createStyleSheet({
        // //desktop
        "@global": {
          body: {
            margin: 0,
            padding: 0,
          },
        },
        [`@media (min-width: ${available_media_devices.styleMedia.desktop.minResulation}) `]:
          styleMedia.desktop,
        //laptop
        [`@media (min-width: ${available_media_devices.styleMedia.laptop.minResulation}) and (max-width: ${available_media_devices.styleMedia.laptop.maxResulation})`]:
          styleMedia.laptop,
        //mobile
        [`@media (max-width: ${available_media_devices.styleMedia.mobile.maxResulation})`]:
          styleMedia.mobile,
        //tablet
        [`@media (min-width: ${available_media_devices.styleMedia.tablet.minResulation}) and (max-width: ${available_media_devices.styleMedia.tablet.maxResulation})`]:
          styleMedia.tablet,
      })
      .attach();

    // const Title = styled.Tag({
    //   fontSize: "1.5em",
    //   textAlign: "center",
    //   color: "palevioletred",
    // });

    // console.log(Tag);

    return (
      <>
        {/* <Title>Hi</Title> */}

        {Tag === "img" ? (
          <Tag key={id} {...attributes} className={dex.classes.style} />
        ) : (
          // <Tag {...attributes} key={id} className={dex.classes.style}>
          //   {static_content}
          //   {children && children.map((child) => renderComponent(child))}
          // </Tag>
          <DynamicStyledComponent
            as={Tag}
            additionalStyles={{
              [`@media (min-width: ${available_media_devices.styleMedia.desktop.minResulation}) `]:
                styleMedia.desktop.style,
              //laptop
              [`@media (min-width: ${available_media_devices.styleMedia.laptop.minResulation}) and (max-width: ${available_media_devices.styleMedia.laptop.maxResulation})`]:
                styleMedia.laptop.style,
              //mobile
              [`@media (max-width: ${available_media_devices.styleMedia.mobile.maxResulation})`]:
                styleMedia.mobile.style,
              //tablet
              [`@media (min-width: ${available_media_devices.styleMedia.tablet.minResulation}) and (max-width: ${available_media_devices.styleMedia.tablet.maxResulation})`]:
                styleMedia.tablet.style,
            }}
          >
            {static_content}
            {children && children.map((child) => renderComponent(child))}
          </DynamicStyledComponent>
        )}
      </>
    );
  };

  return (
    <div> {newModifiedData.map((component) => renderComponent(component))}</div>
  );
}

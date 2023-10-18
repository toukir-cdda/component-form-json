"use client";
import { createUseStyles } from "react-jss";
import { compoData } from "../../data";
import { create } from "jss";
import preset from "jss-preset-default";

export default function Home() {
  const { templates, available_media_devices } = compoData;
  const jss = create();
  jss.setup(preset());

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
    const { desktop, laptop, mobile, tablet } = styleMedia;
    // console.log(styleMedia);
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
    // const sheet = jss.createStyleSheet(styleMedia.tablet).attach();
    console.log(dex);
    return (
      <>
        {Tag === "img" ? (
          <Tag key={id} {...attributes} className={dex.classes.style} />
        ) : (
          <Tag {...attributes} key={id} className={dex.classes.style}>
            {static_content}
            {/* {component?.template_author} */}
            {children && children.map((child) => renderComponent(child))}
          </Tag>
        )}
      </>
    );
  };

  return (
    <div> {newModifiedData.map((component) => renderComponent(component))}</div>
  );
}

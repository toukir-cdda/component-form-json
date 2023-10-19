"use client";
import { ContentType, DataProps, compoData } from "../../data";
import DynamicStyledComponent from "../components/DynamicStyledComponent";
import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";

export default function Home() {
  const { templates, available_media_devices } = compoData;
  //find parent and children
  const modifiedData = (templates: DataProps[]) => {
    const modifiedData = [];

    for (const template of templates) {
      const { elements, ...others } = template;

      const findChildren = (parentId: string | null) => {
        const children = [];
        for (const item of elements) {
          if (item.parent_id === parentId) {
            const childItem: any = { ...item, children: findChildren(item.id) };
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

  const renderComponent = (component: {
    children: any;
    template_name?: string;
    template_description?: string;
    template_author?: string;
    template_version?: string;
    title?: string;
    description?: string;
    slug?: string;
    id: any;
    parent?: string;
    status?: "draft" | "published" | "deleted" | "archived" | undefined;
    meta?: { title: string };
    permission?:
      | { guest: boolean; login: boolean; role: string | null }
      | undefined;
    layout?: string;
    content?: ContentType[] | undefined;
    faqs?: string;
    tour?: {}[] | undefined;
    functions?: { add: (a: number, b: number) => number };
    parent_id?: string | null;
    tag: any;
    attributes: any;
    static_content: any;
    dynamic_content: any;
  }) => {
    const {
      id,
      tag: Tag,
      attributes,
      dynamic_content,
      static_content,
      children,
    } = component;
    const { styleMedia, ...otherAttributes } = attributes;

    return (
      <Fragment key={uuidv4()}>
        {Tag === "img" ? (
          <DynamicStyledComponent
            key={uuidv4()}
            as={Tag}
            {...otherAttributes}
            theme={{
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
          />
        ) : (
          <DynamicStyledComponent
            key={uuidv4()}
            as={Tag}
            theme={{
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
            {children &&
              children.map(
                (child: {
                  children: any;
                  template_name?: string | undefined;
                  template_description?: string | undefined;
                  template_author?: string | undefined;
                  template_version?: string | undefined;
                  title?: string | undefined;
                  description?: string | undefined;
                  slug?: string | undefined;
                  id: any;
                  parent?: string | undefined;
                  status?:
                    | "draft"
                    | "published"
                    | "deleted"
                    | "archived"
                    | undefined;
                  meta?: { title: string } | undefined;
                  permission?:
                    | { guest: boolean; login: boolean; role: string | null }
                    | undefined;
                  layout?: string | undefined;
                  content?: ContentType[] | undefined;
                  faqs?: string | undefined;
                  tour?: {}[] | undefined;
                  functions?:
                    | { add: (a: number, b: number) => number }
                    | undefined;
                  parent_id?: string | null | undefined;
                  tag: any;
                  attributes: any;
                  static_content: any;
                  dynamic_content: any;
                }) => renderComponent(child)
              )}
          </DynamicStyledComponent>
        )}
      </Fragment>
    );
  };
  return (
    <div> {newModifiedData.map((component) => renderComponent(component))}</div>
  );
}

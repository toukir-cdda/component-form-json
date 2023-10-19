import { CSSProperties } from "react";

export type AvailableMediaDevices = {
  styleMedia: {
    desktop: {
      minResulation: string;
      maxResulation: string;
    };
    laptop: {
      minResulation: string;
      maxResulation: string;
    };
    tablet: {
      minResulation: string;
      maxResulation: string;
    };
    mobile: {
      minResulation: string;
      maxResulation: string;
    };
  };
};

export type ContentType = {
  id: number;
  name: string;
  title: string;
  description: string;
  logo?: string;
  component?: string;
};

export type DataProps = {
  template_name: string;
  template_description: string;
  template_author: string;
  template_version: string;
  title: string;
  description: string;
  slug: string;
  id: number;
  parent: string;
  status?: "draft" | "published" | "deleted" | "archived";
  meta: { title: string };
  permission?: {
    guest: boolean;
    login: boolean;
    role: null | string;
  };
  layout: string;
  content?: ContentType[];
  faqs: string;
  tour?: {}[];
  functions: {
    add: (a: number, b: number) => number;
  };

  elements: {
    id: string;
    parent_id: string | null;
    tag: string;
    attributes: {
      alt?: string | null;
      src?: string;
      className?: string[];
      id: string[];
      styleMedia: {
        desktop: {
          style: CSSProperties;
        };
        laptop: {
          style: CSSProperties;
        };
        tablet: {
          style: CSSProperties;
        };
        mobile: {
          style: CSSProperties;
        };
      };
    };

    static_content: string | null;
    dynamic_content: {
      hooks: any[];
      data: any[];
    };
    // ... (rest of the properties)
  }[];
};

export type CompoDataTypes = {
  available_media_devices: AvailableMediaDevices;
  templates: DataProps[];
};

export const compoData: CompoDataTypes = {
  available_media_devices: {
    styleMedia: {
      desktop: {
        minResulation: "1024px",
        maxResulation: "1920px",
      },
      laptop: {
        minResulation: "766px",
        maxResulation: "1023px",
      },
      tablet: {
        minResulation: "568px",
        maxResulation: "765px",
      },
      mobile: {
        minResulation: "567px",
        maxResulation: "100px",
      },
    },
  },

  templates: [
    {
      template_name: "Builder Skalton",
      template_description: "Builder Skalton",
      template_author: "Abul Hasem",
      template_version: "1.0.0",
      title: "Page generator",
      description: "Page testing",
      slug: "/content",
      id: 1,
      layout: "layout",
      parent: "empty",
      meta: {
        title: "Page generator",
      },
      permission: {
        guest: false,
        login: true,
        role: null,
      },
      elements: [
        {
          id: "000000001",
          parent_id: null,
          tag: "main",
          attributes: {
            className: ["bodyClass-1", "bodyClass-2"],
            id: ["bodyId-1", "bodyId-2"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "100%",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "1920px",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "1920px",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "1920px",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000002",
          parent_id: "000000001",
          tag: "aside",
          attributes: {
            className: ["aside"],
            id: ["aside"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000003",
          parent_id: "000000001",
          tag: "div",
          attributes: {
            className: ["content-area"],
            id: ["content-area"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000004",
          parent_id: "000000002",
          tag: "div",
          attributes: {
            className: ["bodyClass-1", "bodyClass-2"],
            id: ["bodyId-1", "bodyId-2"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "8px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "4px solid rgba(255, 255, 255, 0.20)",
                  borderRight: "2px solid rgba(255, 255, 255, 0.20)",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000005",
          parent_id: "000000004",
          tag: "p",
          attributes: {
            className: ["icon"],
            id: ["icon"],
            styleMedia: {
              desktop: {
                style: {
                  color: "white",
                  "&:hover": {
                    color: "red",
                    cursor: "pointer",
                  },
                },
              },
              laptop: {
                style: {},
              },
              tablet: {
                style: {},
              },
              mobile: {
                style: {},
              },
            },
          },
          static_content: "Icon",
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000006",
          parent_id: "000000004",
          tag: "img",
          attributes: {
            className: ["logo"],
            id: ["logo"],
            alt: "logo",
            src: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            styleMedia: {
              desktop: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
              laptop: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
              tablet: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
              mobile: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
            },
          },
          static_content: "Icon",
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000007",
          parent_id: "000000004",
          tag: "p",
          attributes: {
            className: ["icon"],
            id: ["icon"],
            styleMedia: {
              desktop: {
                style: {
                  background: "white",
                  cursor: "pointer",
                },
              },
              laptop: {
                style: {},
              },
              tablet: {
                style: {},
              },
              mobile: {
                style: {},
              },
            },
          },
          static_content: "Icon",
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000008",
          parent_id: "000000002",
          tag: "div",
          attributes: {
            className: ["aside-navigation"],
            id: ["a-nv"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  padding: "",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000009",
          parent_id: "000000002",
          tag: "div",
          attributes: {
            className: ["quick-action"],
            id: ["action"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000010",
          parent_id: "000000003",
          tag: "div",
          attributes: {
            className: ["top-nav"],
            id: ["top-nav"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                  background: "black",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000011",
          parent_id: "000000003",
          tag: "div",
          attributes: {
            className: ["container"],
            id: ["container"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000012",
          parent_id: "000000011",
          tag: "div",
          attributes: {
            className: ["main"],
            id: ["main"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                  position: "relative",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000013",
          parent_id: "000000011",
          tag: "div",
          attributes: {
            className: ["actionDrawer"],
            id: ["actionDrawer"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  position: "relative",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000014",
          parent_id: "000000012",
          tag: "div",
          attributes: {
            className: ["action-tools"],
            id: ["action-tools"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: "gray",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: "blue",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: "blue",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: " #333",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
      ],
      faqs: "Ask me something",
      tour: [],
      functions: {
        add: (a, b) => {
          return a + b;
        },
      },
    },
    {
      template_name: "Builder Skalton",
      template_description: "Builder Skalton",
      template_author: "Abul Hasem",
      template_version: "1.0.0",
      title: "Page generator",
      description: "Page testing",
      slug: "/content-2",
      id: 2,
      layout: "layout",
      parent: "empty",
      meta: {
        title: "Page generator",
      },
      permission: {
        guest: false,
        login: true,
        role: null,
      },
      elements: [
        {
          id: "000000001",
          parent_id: null,
          tag: "main",
          attributes: {
            className: ["bodyClass-1", "bodyClass-2"],
            id: ["bodyId-1", "bodyId-2"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "100%",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "1920px",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "1920px",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "1920px",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000002",
          parent_id: "000000001",
          tag: "aside",
          attributes: {
            className: ["aside"],
            id: ["aside"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000003",
          parent_id: "000000001",
          tag: "div",
          attributes: {
            className: ["content-area"],
            id: ["content-area"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000004",
          parent_id: "000000002",
          tag: "div",
          attributes: {
            className: ["bodyClass-1", "bodyClass-2"],
            id: ["bodyId-1", "bodyId-2"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "8px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "4px solid rgba(255, 255, 255, 0.20)",
                  borderRight: "2px solid rgba(255, 255, 255, 0.20)",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000005",
          parent_id: "000000004",
          tag: "p",
          attributes: {
            className: ["icon"],
            id: ["icon"],
            styleMedia: {
              desktop: {
                style: {
                  color: "white",
                },
              },
              laptop: {
                style: {},
              },
              tablet: {
                style: {},
              },
              mobile: {
                style: {},
              },
            },
          },
          static_content: "Icon",
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000006",
          parent_id: "000000004",
          tag: "img",
          attributes: {
            className: ["logo"],
            id: ["logo"],
            alt: "logo",
            src: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            styleMedia: {
              desktop: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
              laptop: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
              tablet: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
              mobile: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
            },
          },
          static_content: "Icon",
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000007",
          parent_id: "000000004",
          tag: "p",
          attributes: {
            className: ["icon"],
            id: ["icon"],
            styleMedia: {
              desktop: {
                style: {
                  background: "white",
                  cursor: "pointer",
                },
              },
              laptop: {
                style: {},
              },
              tablet: {
                style: {},
              },
              mobile: {
                style: {},
              },
            },
          },
          static_content: "Icon",
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000008",
          parent_id: "000000002",
          tag: "div",
          attributes: {
            className: ["aside-navigation"],
            id: ["a-nv"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  padding: "",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000009",
          parent_id: "000000002",
          tag: "div",
          attributes: {
            className: ["quick-action"],
            id: ["action"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000010",
          parent_id: "000000003",
          tag: "div",
          attributes: {
            className: ["top-nav"],
            id: ["top-nav"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                  background: "black",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000011",
          parent_id: "000000003",
          tag: "div",
          attributes: {
            className: ["container"],
            id: ["container"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000012",
          parent_id: "000000011",
          tag: "div",
          attributes: {
            className: ["main"],
            id: ["main"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                  position: "relative",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000013",
          parent_id: "000000011",
          tag: "div",
          attributes: {
            className: ["actionDrawer"],
            id: ["actionDrawer"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  position: "relative",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000014",
          parent_id: "000000012",
          tag: "div",
          attributes: {
            className: ["action-tools"],
            id: ["action-tools"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: "gray",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: "blue",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: "blue",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: " #333",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
      ],
      faqs: "Ask me something",
      tour: [],
      functions: {
        add: (a, b) => {
          return a + b;
        },
      },
    },
    {
      template_name: "Builder Skalton",
      template_description: "Builder Skalton",
      template_author: "Abul Hasem",
      template_version: "1.0.0",
      title: "Page generator",
      description: "Page testing",
      slug: "/content-3",
      id: 3,
      layout: "layout",
      parent: "empty",
      meta: {
        title: "Page generator",
      },
      permission: {
        guest: false,
        login: true,
        role: null,
      },
      elements: [
        {
          id: "000000001",
          parent_id: null,
          tag: "main",
          attributes: {
            className: ["bodyClass-1", "bodyClass-2"],
            id: ["bodyId-1", "bodyId-2"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "100%",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "1920px",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "1920px",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "1920px",
                  height: "100vh",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  background: "#1F1F1F",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000002",
          parent_id: "000000001",
          tag: "aside",
          attributes: {
            className: ["aside"],
            id: ["aside"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "300px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexShrink: 0,
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000003",
          parent_id: "000000001",
          tag: "div",
          attributes: {
            className: ["content-area"],
            id: ["content-area"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000004",
          parent_id: "000000002",
          tag: "div",
          attributes: {
            className: ["bodyClass-1", "bodyClass-2"],
            id: ["bodyId-1", "bodyId-2"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "8px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "4px solid rgba(255, 255, 255, 0.20)",
                  borderRight: "2px solid rgba(255, 255, 255, 0.20)",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000005",
          parent_id: "000000004",
          tag: "p",
          attributes: {
            className: ["icon"],
            id: ["icon"],
            styleMedia: {
              desktop: {
                style: {
                  color: "white",
                },
              },
              laptop: {
                style: {},
              },
              tablet: {
                style: {},
              },
              mobile: {
                style: {},
              },
            },
          },
          static_content: "Icon",
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000006",
          parent_id: "000000004",
          tag: "img",
          attributes: {
            className: ["logo"],
            id: ["logo"],
            alt: "logo",
            src: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            styleMedia: {
              desktop: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
              laptop: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
              tablet: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
              mobile: {
                style: {
                  width: "50px!important",
                  height: "50px!important",
                },
              },
            },
          },
          static_content: "Icon",
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000007",
          parent_id: "000000004",
          tag: "p",
          attributes: {
            className: ["icon"],
            id: ["icon"],
            styleMedia: {
              desktop: {
                style: {
                  background: "white",
                  cursor: "pointer",
                },
              },
              laptop: {
                style: {},
              },
              tablet: {
                style: {},
              },
              mobile: {
                style: {},
              },
            },
          },
          static_content: "Icon",
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000008",
          parent_id: "000000002",
          tag: "div",
          attributes: {
            className: ["aside-navigation"],
            id: ["a-nv"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  padding: "",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000009",
          parent_id: "000000002",
          tag: "div",
          attributes: {
            className: ["quick-action"],
            id: ["action"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000010",
          parent_id: "000000003",
          tag: "div",
          attributes: {
            className: ["top-nav"],
            id: ["top-nav"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                  background: "black",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  height: "74px",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000011",
          parent_id: "000000003",
          tag: "div",
          attributes: {
            className: ["container"],
            id: ["container"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000012",
          parent_id: "000000011",
          tag: "div",
          attributes: {
            className: ["main"],
            id: ["main"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                  position: "relative",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000013",
          parent_id: "000000011",
          tag: "div",
          attributes: {
            className: ["actionDrawer"],
            id: ["actionDrawer"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  position: "relative",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "450px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
        {
          id: "000000014",
          parent_id: "000000012",
          tag: "div",
          attributes: {
            className: ["action-tools"],
            id: ["action-tools"],
            styleMedia: {
              desktop: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: "gray",
                },
              },
              laptop: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: "blue",
                },
              },
              tablet: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: "blue",
                },
              },
              mobile: {
                style: {
                  display: "flex",
                  width: "783px",
                  height: "52px",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  position: "absolute",
                  right: "187px",
                  top: "20px",
                  borderRadius: "4px",
                  background: " #333",
                },
              },
            },
          },
          static_content: null,
          dynamic_content: {
            hooks: [],
            data: [],
          },
        },
      ],
      faqs: "Ask me something",
      tour: [],
      functions: {
        add: (a, b) => {
          return a + b;
        },
      },
    },
  ],
};

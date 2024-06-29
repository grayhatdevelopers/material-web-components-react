"use client";

// @TODO: Fix this. Right now, static generation doesn't seem to work with Material Web Components.
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/ui/button"), { ssr: false });
const Checkbox = dynamic(() => import("@/components/ui/checkbox"), {
  ssr: false,
});
const Chip = dynamic(() => import("@/components/ui/chip"), { ssr: false });
const ChipSet = dynamic(
  () => import("@/components/ui/chip").then((mod) => mod.ChipSet),
  { ssr: false }
);
const Dialog = dynamic(() => import("@/components/ui/dialog"), { ssr: false });
const Divider = dynamic(() => import("@/components/ui/divider"), {
  ssr: false,
});
const FAB = dynamic(() => import("@/components/ui/floating-action-button"), {
  ssr: false,
});
const Icon = dynamic(() => import("@/components/ui/icon"), { ssr: false });
const IconButton = dynamic(() => import("@/components/ui/icon-button"), {
  ssr: false,
});
const List = dynamic(() => import("@/components/ui/list"), { ssr: false });
const ListItem = dynamic(
  () => import("@/components/ui/list").then((mod) => mod.ListItem),
  { ssr: false }
);
const Menu = dynamic(() => import("@/components/ui/menu"), { ssr: false });
const MenuItem = dynamic(
  () => import("@/components/ui/menu").then((mod) => mod.MenuItem),
  { ssr: false }
);
const CircularProgress = dynamic(
  () => import("@/components/ui/progress").then((mod) => mod.CircularProgress),
  { ssr: false }
);
const LinearProgress = dynamic(
  () => import("@/components/ui/progress").then((mod) => mod.LinearProgress),
  { ssr: false }
);
const Radio = dynamic(() => import("@/components/ui/radio"), { ssr: false });
const Select = dynamic(() => import("@/components/ui/select"), { ssr: false });
const SelectOption = dynamic(
  () => import("@/components/ui/select").then((mod) => mod.SelectOption),
  { ssr: false }
);
const Slider = dynamic(() => import("@/components/ui/slider"), { ssr: false });
const Switch = dynamic(() => import("@/components/ui/switch"), { ssr: false });
const Tabs = dynamic(() => import("@/components/ui/tabs"), { ssr: false });
const PrimaryTab = dynamic(
  () => import("@/components/ui/tabs").then((mod) => mod.PrimaryTab),
  { ssr: false }
);
const SecondaryTab = dynamic(
  () => import("@/components/ui/tabs").then((mod) => mod.SecondaryTab),
  { ssr: false }
);
const TextField = dynamic(() => import("@/components/ui/textfield"), {
  ssr: false,
});

// import GitHubButton from "react-github-btn";
// import reactElementToJSXString from 'react-element-to-jsx-string';
import { renderToString } from "react-dom/server";

import React, { useState } from "react";
import GitHubButton from "react-github-btn";

const Column = ({ children, ...props }: { children: any; id: string }) => {
  return (
    <div
      className="w-full h-fit md:h-screen overflow-y-scroll flex-col gap-4 pt-4"
      {...props}
    >
      {children}
    </div>
  );
};

const DemoSection = ({ title, children }: { title: any; children: any }) => {
  return (
    <div className="bg-[#F6F0F8] rounded-xl flex flex-col items-center justify-center mb-4 px-4 py-8">
      <h2 className="flex justify-center text-xl">{title}</h2>
      {children}
    </div>
  );
};

const ComponentDemo = ({
  title,
  docsLink,
  children,
  codeContainerProps,
}: {
  title: any;
  docsLink?: any;
  children: any;
  codeContainerProps?: any;
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center gap-1 mb-4">
      <div className="flex justify-center items-center gap-0 w-full pt-2 ">
        <h3 className="flex items-center justify-center text-sm">{title}</h3>

        {/* <div className="flex justify-center items-center gap-2 w-fit">
        <IconButton title={showCode ? "Show preview" : "Show code"} className="h-6 w-6" onClick={() => setShowCode(oldState => !oldState)}>
          <Icon className="text-sm">code</Icon>
        </IconButton>
        {docsLink && <a className="h-6 w-6" target="_blank" href={docsLink}>
          <Icon className="text-sm">open_in_new</Icon>
        </a>}
        </div> */}
      </div>
      <div
        className="h-fit w-fit rounded-lg border border-[#CAC4CF] p-6 flex flex-col flex-wrap items-center justify-center gap-2"
        {...codeContainerProps}
      >
        {showCode
          ? renderToString(children)
              .replaceAll("<!--$-->", "\n")
              .replaceAll("<!--/$-->", "\n")
          : children}
      </div>
    </div>
  );
};

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const comics = [
    {
      title: "Ossimu Quasi Alum",
      previewImageUrl: "https://picsum.photos/id/237/200/300",
      issue: "XX",
      page: "YY",
      tags: [
        "Delect a Distinctio",
        "Facere",
        "Morbi Leo",
        "Eris Culpa",
        "Quisus",
      ],
    },
    // ... other comics
  ];
  return (
    <main className="bg-[#FDF7FF] max-h-screen w-full">
      <div
        id="titlebar"
        className="backdrop-blur-md z-10 w-full h-16 flex flex-row gap-3 items-center justify-center"
      >
        <h1 className="font-bold text-xl">Material 3 for React</h1>
        <GitHubButton href="https://github.com/grayhatdevelopers/material-web-react">
          Star us on GitHub
        </GitHubButton>
      </div>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-[5rem_1fr_1fr] gap-4 md:h-screen">
        <div id="sidebar"></div>

        {/* <Column id="column-a">
          <DemoSection title={"Actions"}>
            <ComponentDemo title={"Common buttons"} docsLink={`https://github.com/material-components/material-web/blob/main/docs/components/button.md`}>
              <div className="flex flex-row items-center justify-center gap-3">
                <Button variant="md-elevated-button">Elevated</Button>
                <Button variant="md-filled-button">Filled</Button>
                <Button variant="md-filled-tonal-button">Filled Tonal</Button>
                <Button variant="md-outlined-button">Outlined</Button>
                <Button variant="md-text-button">Text</Button>
              </div>
              <div className="flex flex-row items-center justify-center gap-3">
                <Button variant="md-elevated-button">Icon</Button>
                <Button variant="md-filled-button">Icon</Button>
                <Button variant="md-filled-tonal-button">Icon</Button>
                <Button variant="md-outlined-button">Icon</Button>
                <Button variant="md-text-button">Icon</Button>
              </div>
              <div className="flex flex-row items-center justify-center gap-3">
                <Button variant="md-elevated-button">Elevated</Button>
                <Button variant="md-filled-button">Filled</Button>
                <Button variant="md-filled-tonal-button">Filled Tonal</Button>
                <Button variant="md-outlined-button">Outlined</Button>
                <Button variant="md-text-button">Text</Button>
              </div>
            </ComponentDemo> */}

        <Column id="column-a">
          <DemoSection title={"Actions"}>
            <ComponentDemo title={"Common buttons"}>
              <div className="flex flex-row items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center gap-3">
                <Button className="w-full" variant="md-elevated-button">Elevated</Button>
                <Button className="w-full" variant="md-filled-button">Filled</Button>
                <Button className="w-full" variant="md-filled-tonal-button">Filled Tonal</Button>
                <Button className="w-full" variant="md-outlined-button">Outlined</Button>
                <Button className="w-full" variant="md-text-button">Text</Button>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center">
                <Button className="w-full" variant="md-elevated-button">
                  Icon
                  <Icon slot="icon">add</Icon>
                </Button>
                <Button className="w-full" variant="md-filled-button">
                  Icon
                  <Icon slot="icon">add</Icon>
                </Button>
                <Button className="w-full" variant="md-filled-tonal-button">
                  Icon
                  <Icon slot="icon">add</Icon>
                </Button>
                <Button className="w-full" variant="md-outlined-button">
                  Icon
                  <Icon slot="icon">add</Icon>
                </Button>
                <Button className="w-full" variant="md-text-button">
                  Icon
                  <Icon slot="icon">add</Icon>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <Button className="w-full" disabled variant="md-elevated-button">
                  Elevated
                </Button>
                <Button className="w-full" disabled variant="md-filled-button">
                  Filled
                </Button>
                <Button className="w-full" disabled variant="md-filled-tonal-button">
                  Filled Tonal
                </Button>
                <Button className="w-full" disabled variant="md-outlined-button">
                  Outlined
                </Button>
                <Button className="w-full" disabled variant="md-text-button">
                  Text
                </Button>
              </div>
              </div>
            </ComponentDemo>

            <ComponentDemo title={"Floating action buttons"}>
              <div className="flex flex-row w-fit items-center justify-center gap-3">
                <FAB size="small">
                  <Icon slot="icon">add</Icon>
                </FAB>
                <FAB label="Create">
                  <Icon slot="icon">add</Icon>
                </FAB>
                <FAB>
                  <Icon slot="icon">add</Icon>
                </FAB>
                <FAB size="large">
                  <Icon slot="icon">add</Icon>
                </FAB>
              </div>
            </ComponentDemo>

            <ComponentDemo title={"Icon buttons"}>
              <div className="flex flex-row gap-4 ">
                <IconButton variant="md-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-filled-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-filled-tonal-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-outlined-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>
              </div>
              <div className="flex flex-row gap-4 ">
                <IconButton disabled variant="md-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton disabled variant="md-filled-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton disabled variant="md-filled-tonal-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton disabled variant="md-outlined-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>
              </div>
            </ComponentDemo>
          </DemoSection>

          <DemoSection title="Communication">
            <ComponentDemo title={"Progress indicators"}>
              <div className="flex flex-row gap-10 justify-center items-center">
                <CircularProgress indeterminate></CircularProgress>
                <LinearProgress indeterminate></LinearProgress>
              </div>
            </ComponentDemo>
          </DemoSection>

          <DemoSection title="Containment">
            <ComponentDemo
              title={"Divider"}
              codeContainerProps={{
                style: {
                  width: "200px",
                },
              }}
            >
              <Divider className="my-4" />
            </ComponentDemo>

            <ComponentDemo title={"Dialog"}>
              <div className="w-full">
                <Button
                  variant="md-text-button"
                  onClick={() => setShowDialog((oldState) => !oldState)}
                >
                  {showDialog ? "Hide dialog" : "Show dialog"}
                </Button>
                <Dialog open={showDialog}>
                  <div slot="headline">Dialog title</div>
                  <form slot="content" id="form-id" method="dialog">
                    A simple dialog with free-form content.
                  </form>
                  <div slot="actions">
                    <Button
                      variant="md-text-button"
                      onClick={() => setShowDialog(false)}
                    >
                      Ok
                    </Button>
                  </div>
                </Dialog>
              </div>
            </ComponentDemo>
          </DemoSection>
        </Column>

        <Column id="column-b">
          <DemoSection title={"Selection"}>
            <ComponentDemo title={"Checkboxes"}>
              <div className="grid grid-cols-2 w-full gap-3">
                <label className="flex flex-row gap-2  items-center justify-center">
                  <Checkbox />
                  Hello checkbox
                </label>
                <label className="flex flex-row gap-2  items-center justify-center">
                  <Checkbox checked />
                  Hello checkbox
                </label>
                <label className="flex flex-row gap-2 items-center justify-center">
                  <Checkbox indeterminate />
                  Hello checkbox
                </label>
                <label className="flex flex-row gap-2 items-center justify-center">
                  <Checkbox disabled checked />
                  Hello checkbox
                </label>
              </div>
            </ComponentDemo>

            <ComponentDemo title={"Chips"}>
              <ChipSet>
                <Chip variant="md-assist-chip" label="Assist" checked>
                  <Icon slot="icon">event</Icon>
                  Assist
                </Chip>
                <Chip variant="md-filter-chip" label="Filter" checked>
                  Filter
                </Chip>
                <Chip variant="md-input-chip" label="Input">
                  Input
                </Chip>
                <Chip variant="md-suggestion-chip" label="Suggestion">
                  Suggestion
                </Chip>
              </ChipSet>
              <ChipSet>
                <Chip disabled variant="md-assist-chip" label="Assist">
                  <Icon slot="icon">event</Icon>
                  Assist
                </Chip>
                <Chip disabled variant="md-filter-chip" label="Filter">
                  Filter
                </Chip>
                <Chip disabled variant="md-input-chip" label="Input">
                  Input
                </Chip>
                <Chip disabled variant="md-suggestion-chip" label="Suggestion">
                  Suggestion
                </Chip>
              </ChipSet>
            </ComponentDemo>

            <ComponentDemo title={"Radio buttons"}>
              <form>
                <div
                  role="radiogroup"
                  aria-labelledby="group-title"
                  className="flex flex-col gap-3"
                >
                  <label className="flex flex-row gap-3 items-center">
                    <Radio id="first-radio" name="group" value="1"></Radio>
                    Option 1
                  </label>

                  <label className="flex flex-row gap-3 items-center">
                    <Radio id="second-radio" name="group" value="2"></Radio>
                    Option 2
                  </label>

                  <label className="flex flex-row gap-3 items-center">
                    <Radio id="third-radio" name="group" value="3"></Radio>
                    Option 3
                  </label>
                </div>
              </form>
            </ComponentDemo>

            <ComponentDemo title={"Switches"}>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <Switch selected></Switch>
                  <Switch selected disabled></Switch>
                </div>
                <div className="flex flex-col gap-2">
                  <Switch></Switch>
                  <Switch disabled></Switch>
                </div>
              </div>
            </ComponentDemo>

            <ComponentDemo title={"Sliders"}>
              <div className="flex flex-col gap-4">
                <Slider></Slider>
                <Slider ticks value={50}></Slider>
                <Slider range value-start="25" value-end="75"></Slider>
              </div>
            </ComponentDemo>

            <ComponentDemo title="Menus">
              <Button
                id="usage-anchor"
                variant="md-text-button"
                onClick={() => setShowMenu((oldState) => !oldState)}
              >
                {showMenu ? "Hide menu" : "Show menu"}
              </Button>
              <Menu open={showMenu} id="usage-menu" anchor="usage-anchor">
                <MenuItem>Menu Item 1</MenuItem>
              </Menu>
            </ComponentDemo>

            <ComponentDemo title={"Select"}>
              <Select label="Choose an option">
                <SelectOption value="1">Option 1</SelectOption>
                <SelectOption value="2">Option 2</SelectOption>
              </Select>
            </ComponentDemo>
          </DemoSection>

          <DemoSection title={"Navigation"}>
            <ComponentDemo title={"Tabs"}>
              <Tabs>
                <PrimaryTab>Hello Tabs!</PrimaryTab>
                <SecondaryTab>
                  <Icon>image</Icon>Hello Tabs!
                </SecondaryTab>
              </Tabs>
            </ComponentDemo>

            <ComponentDemo title={"List"}>
              <List
                style={{
                  maxWidth: "300px",
                }}
              >
                <ListItem>Fruits</ListItem>
                <Divider></Divider>
                <ListItem>Apple</ListItem>
                <ListItem>Banana</ListItem>
                <ListItem>
                  <div slot="headline">Cucumber</div>
                  <div slot="supporting-text">
                    Cucumbers are long green fruits that are just as long as
                    this multi-line description
                  </div>
                </ListItem>
                <ListItem
                  type="link"
                  href="https://google.com/search?q=buy+kiwis&tbm=shop"
                  target="_blank"
                >
                  <div slot="headline">Shop for Kiwis</div>
                  <div slot="supporting-text">
                    This will link you out in a new tab
                  </div>
                  <Icon slot="end">open_in_new</Icon>
                </ListItem>
              </List>
            </ComponentDemo>
          </DemoSection>

          <DemoSection title={"Text Inputs"}>
            <ComponentDemo title={"Text Fields"}>
              <TextField variant="md-filled-text-field" placeholder="Filled">
                <Icon slot="leading-icon">search</Icon>
                <IconButton slot="trailing-icon">
                  <Icon>close</Icon>
                </IconButton>
              </TextField>
              <TextField
                disabled
                variant="md-filled-text-field"
                placeholder="Filled"
              >
                <Icon slot="leading-icon">search</Icon>
                <IconButton slot="trailing-icon">
                  <Icon>close</Icon>
                </IconButton>
              </TextField>

              <TextField
                variant="md-outlined-text-field"
                placeholder="Outlined"
              >
                <Icon slot="leading-icon">search</Icon>
                <IconButton slot="trailing-icon">
                  <Icon>close</Icon>
                </IconButton>
              </TextField>
              <TextField
                disabled
                variant="md-outlined-text-field"
                placeholder="Outlined"
              >
                <Icon slot="leading-icon">search</Icon>
                <IconButton slot="trailing-icon">
                  <Icon>close</Icon>
                </IconButton>
              </TextField>
            </ComponentDemo>
          </DemoSection>
        </Column>
      </div>
    </main>
  );
}

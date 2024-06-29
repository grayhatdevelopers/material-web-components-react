"use client";

// @TODO: Fix this. Right now, static generation doesn't seem to work with Material Web Components.
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/ui/button"), { ssr: false });
const Checkbox = dynamic(() => import("@/components/ui/checkbox"), { ssr: false });
const Chip = dynamic(() => import("@/components/ui/chip"), { ssr: false });
const ChipSet = dynamic(() => import("@/components/ui/chip").then(mod => mod.ChipSet), { ssr: false });
const Dialog = dynamic(() => import("@/components/ui/dialog"), { ssr: false });
const Divider = dynamic(() => import("@/components/ui/divider"), { ssr: false });
const FAB = dynamic(() => import("@/components/ui/floating-action-button"), { ssr: false });
const Icon = dynamic(() => import("@/components/ui/icon"), { ssr: false });
const IconButton = dynamic(() => import("@/components/ui/icon-button"), { ssr: false });
const List = dynamic(() => import("@/components/ui/list"), { ssr: false });
const ListItem = dynamic(() => import("@/components/ui/list").then(mod => mod.ListItem), { ssr: false });
const Menu = dynamic(() => import("@/components/ui/menu"), { ssr: false });
const MenuItem = dynamic(() => import("@/components/ui/menu").then(mod => mod.MenuItem), { ssr: false });
const CircularProgress = dynamic(() => import("@/components/ui/progress").then(mod => mod.CircularProgress), { ssr: false });
const LinearProgress = dynamic(() => import("@/components/ui/progress").then(mod => mod.LinearProgress), { ssr: false });
const Radio = dynamic(() => import("@/components/ui/radio"), { ssr: false });
const Select = dynamic(() => import("@/components/ui/select"), { ssr: false });
const SelectOption = dynamic(() => import("@/components/ui/select").then(mod => mod.SelectOption), { ssr: false });
const Slider = dynamic(() => import("@/components/ui/slider"), { ssr: false });
const Switch = dynamic(() => import("@/components/ui/switch"), { ssr: false });
const Tabs = dynamic(() => import("@/components/ui/tabs"), { ssr: false });
const PrimaryTab = dynamic(() => import("@/components/ui/tabs").then(mod => mod.PrimaryTab), { ssr: false });
const SecondaryTab = dynamic(() => import("@/components/ui/tabs").then(mod => mod.SecondaryTab), { ssr: false });
const TextField = dynamic(() => import("@/components/ui/textfield"), { ssr: false });

// import GitHubButton from "react-github-btn";
// import reactElementToJSXString from 'react-element-to-jsx-string';
import { renderToString } from 'react-dom/server';

import React, { useState } from "react";
import GitHubButton from "react-github-btn";

const Column = ({ children, ...props }: { children: any; id: string }) => {
  return (
    <div
      className="w-full h-screen overflow-y-scroll flex-col gap-4 pt-20"
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

const ComponentDemo = ({ title, docsLink, children }: { title: any; docsLink?: any; children: any }) => {
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
      <div className="h-fit w-fit rounded-lg border border-[#CAC4CF] p-6 flex flex-col flex-wrap items-center justify-center gap-2">
        {showCode ? renderToString(children).replaceAll('<!--$-->', '\n').replaceAll('<!--/$-->', '\n') : children}
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
        className="fixed top-0 left-0 backdrop-blur-md z-10 w-full h-16 flex flex-row gap-3 items-center justify-center"
      >
        <h1 className="font-bold text-xl">Material 3 for React</h1>
        <GitHubButton href="https://github.com/grayhatdevelopers/material-web-react">Star us on GitHub</GitHubButton>
      </div>
      <div className="grid grid-cols-[5rem_1fr_1fr] gap-4 h-screen">
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
                <div className="flex flex-row items-center justify-center gap-3">
                  <Button variant="md-elevated-button">Elevated</Button>
                  <Button variant="md-filled-button">Filled</Button>
                  <Button variant="md-filled-tonal-button">Filled Tonal</Button>
                  <Button variant="md-outlined-button">Outlined</Button>
                  <Button variant="md-text-button">Text</Button>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center">
                  <Button variant="md-elevated-button">Icon
                    <Icon slot="icon">add</Icon>
                  </Button>
                  <Button variant="md-filled-button">Icon
                    <Icon slot="icon">add</Icon>
                  </Button>
                  <Button variant="md-filled-tonal-button">Icon
                    <Icon slot="icon">add</Icon>
                  </Button>
                  <Button variant="md-outlined-button">Icon
                    <Icon slot="icon">add</Icon>
                  </Button>
                  <Button variant="md-text-button">Icon
                    <Icon slot="icon">add</Icon>
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-center gap-3">
                  <Button disabled variant="md-elevated-button">Elevated</Button>
                  <Button disabled variant="md-filled-button">Filled</Button>
                  <Button disabled variant="md-filled-tonal-button">Filled Tonal</Button>
                  <Button disabled variant="md-outlined-button">Outlined</Button>
                  <Button disabled variant="md-text-button">Text</Button>
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
              {/* <ComponentDemo title={"Divider"}>
                <section className="max-w-full" >
                  <Divider color="black" ></Divider>
                </section>
              </ComponentDemo> */}

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
                  <Chip variant="md-assist-chip" label="Assist" checked >
                    <Icon slot="icon" >event</Icon>
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
                    <Icon slot="icon" >event</Icon>
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

              <ComponentDemo title={"Radio buttons"} >
                <div className="flex flex-col gap-3" >
                  <label className="flex flex-row gap-3">
                    <Radio></Radio>
                    Option1
                  </label>

                  <label className="flex flex-row gap-3">
                    <Radio></Radio>
                    Option1
                  </label>

                  <label className="flex flex-row gap-3">
                    <Radio></Radio>
                    Option1
                  </label>
                </div>
              </ComponentDemo>

              <ComponentDemo title={"Switches"}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <Switch selected></Switch>
                    <Switch disabled></Switch>
                  </div>
                  <div className="flex flex-col">
                    <Switch></Switch>
                  </div>
                </div>
              </ComponentDemo>

              <ComponentDemo title={"Sliders"} >
                <div className="flex flex-col gap-4" >
                  <Slider valueStart={0} valueEnd={90} ></Slider>
                  <Slider></Slider>
                </div>
              </ComponentDemo>

              <ComponentDemo title="Menus">
                <Button 
                  id="usage-anchor"
                 variant="md-text-button"
                 onClick={() => setShowMenu((oldState) => !oldState)}
                >{showMenu ? "Hide menu" : "Show menu"}</Button>
                <Menu open={showMenu} 
                id="usage-menu"
                anchor="usage-anchor"
                >
                  <MenuItem>Menu Item 1</MenuItem>
                </Menu>
              </ComponentDemo>

              <ComponentDemo title={"Select"} >
                <Select label="Choose an option" >
                  <SelectOption value="1" >Option 1</SelectOption>
                  <SelectOption value="2">Option 2</SelectOption>
                </Select>
              </ComponentDemo>
            </DemoSection>

            <DemoSection title={"Navigation"}  >
              <ComponentDemo title={"Tabs"}    >
                <PrimaryTab active >
                  <Tabs>Settings
                    <Icon>Settings</Icon>
                  </Tabs>
                </PrimaryTab>

                <SecondaryTab>
                  <Tabs>Picture
                    <Icon>Image</Icon>
                  </Tabs>
                </SecondaryTab>
              </ComponentDemo>

              <ComponentDemo title={"List"} >
                <List>
                  <ListItem>Item 1</ListItem>
                  <ListItem>Item 2</ListItem>
                  <ListItem>Item 3</ListItem>
                </List>
              </ComponentDemo>
            </DemoSection>

            <DemoSection title={"Text Inputs"} >
              <ComponentDemo title={"Text Fields"} >

                <h3>Filled Text Field</h3>
                <TextField Filled placeholder="filled" ></TextField>


                <h3>Outlined Text Field</h3>
                <TextField disabled variant="outlined" placeholder="outlined" ></TextField>

              </ComponentDemo>

            </DemoSection>
          </Column>
        </div>
      </main>
    );
  }

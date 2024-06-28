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

import GitHubButton from "react-github-btn";

import React, { useState } from "react";

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

const ComponentDemo = ({ title, children }: { title: any; children: any }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <h3 className="flex justify-center pt-4 text-sm">{title}</h3>
      <div className="h-fit w-fit rounded-lg border border-[#CAC4CF] p-6 flex flex-col flex-wrap items-center justify-center gap-2">
        {children}
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
        className="fixed top-0 left-0 backdrop-blur-md z-10 w-full h-16 flex items-center justify-center"
      >
        <h1 className="font-bold text-xl">Material 3</h1>
      </div>
      <div className="grid grid-cols-[5rem_1fr_1fr] gap-4">
        <div id="sidebar"></div>

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
              <div className="">
                <IconButton variant="md-filled-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-filled-tonal-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>
              </div>

              <div>
                <IconButton variant="md-filled-tonal-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-filled-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>
              </div>

              <div>
                <IconButton variant="md-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>
              </div>

              <div>
                <IconButton variant="md-outlined-icon-button">
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-outlined-icon-button">
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
            <ComponentDemo title={"Divider"}>
              <section className="w-full">
                <Divider></Divider>
              </section>
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
                  <Checkbox indeterminate />
                  Hello checkbox
                </label>
              </div>
            </ComponentDemo>

            <ComponentDemo title={"Chips"}>
              <ChipSet>
                <Chip variant="md-assist-chip" label="Assist">
                  Assist
                </Chip>
                <Chip variant="md-filter-chip" label="Filter">
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
          </DemoSection>
        </Column>
      </div>
    </main>
  );
}

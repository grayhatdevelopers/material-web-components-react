"use client";

// @TODO: Fix this. Right now, static generation doesn't seem to work with Material Web Components.
import dynamic from 'next/dynamic';

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

import GitHubButton from 'react-github-btn'

import React, { useState } from "react";

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
    <main className='bg-#FDF7FF' >
      <h1 className="font-bold pt-5 text-xl pl-3" >Material 3</h1>
      <div className="grid grid-cols-[5rem_1fr_1fr] gap-4" >
        {/* column 1 */}
        <div className="bg-#F6F0F8 border rounded-md overflow-auto max-h-full" >
          <h1>Actions</h1>
        </div>

        {/* column 2 */}
        <div>
          <div className="bg-#F6F0F8 border border-black rounded-md overflow-auto max-h-full" >
            <h2 className="flex justify-center pt-4" >Action</h2>
            <h3 className="flex justify-center pt-4" >Common Buttons</h3>
            <div className="h-fit w-96 bg-purple-50 rounded-md border border-black p-6 ml-24 grid grid-cols-3 " >
              <div>
                <Button variant="md-elevated-button" >Elevated</Button>
                <Button variant="md-filled-button">Filled</Button>
                <Button variant="md-filled-tonal-button">Filled Tonal</Button>
                <Button variant="md-outlined-button">Outlined</Button>
                <Button variant="md-text-button">Text</Button>
              </div>
              <div>
                <Button variant="md-elevated-button" >Icon</Button>
                <Button variant="md-filled-button">Icon</Button>
                <Button variant="md-filled-tonal-button">Icon</Button>
                <Button variant="md-outlined-button">Icon</Button>
                <Button variant="md-text-button">Icon</Button>
              </div>
              <div>
                <Button variant="md-elevated-button" >Elevated</Button>
                <Button variant="md-filled-button">Filled</Button>
                <Button variant="md-filled-tonal-button">Filled Tonal</Button>
                <Button variant="md-outlined-button">Outlined</Button>
                <Button variant="md-text-button">Text</Button>
              </div>
            </div>
            <h3 className="flex justify-center pt-4" >Floating Action Button</h3>
            <div className="h-fit w-96 bg-purple-50 rounded-md border border-black p-6 ml-24 flex flex-row gap-5" >
              <FAB size='small'></FAB>
              <FAB size='extended' >Create</FAB>
              <FAB size='standard'></FAB>
              <FAB size='large'></FAB>
            </div>

            <h3 className="flex justify-center pt-4">Icon Buttons</h3>
            <div className="h-fit w-96 bg-purple-50 rounded-md border border-black p-6 ml-24 grid grid-cols-4 gap-6 ">
              <div className="">
                <IconButton variant="md-filled-icon-button" >
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-filled-tonal-icon-button" >
                  <Icon>Settings</Icon>
                </IconButton>
              </div>

              <div>
                <IconButton variant="md-filled-tonal-icon-button" >
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-filled-icon-button" >
                  <Icon>Settings</Icon>
                </IconButton>
              </div>

              <div>
                <IconButton variant="md-icon-button" >
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-icon-button" >
                  <Icon>Settings</Icon>
                </IconButton>
              </div>

              <div>
                <IconButton variant="md-outlined-icon-button" >
                  <Icon>Settings</Icon>
                </IconButton>

                <IconButton variant="md-outlined-icon-button" >
                  <Icon>Settings</Icon>
                </IconButton>
              </div>


            </div>
          </div>

          {/* Communication part */}
          <div className="bg-#F6F0F8 border border-black rounded-md overflow-auto max-h-full mt-4">
            <h1 className="flex justify-center pt-4">Communication</h1>
            <h3 className="flex justify-center pt-4" >Progress Indicator</h3>
            <div className="h-fit w-96 bg-purple-50 rounded-md border border-black p-6 ml-24 flex flex-row gap-10" >
              <CircularProgress indeterminate></CircularProgress>
              <LinearProgress indeterminate></LinearProgress>
            </div>
          </div>

          {/* Containment Part */}

          <div className="bg-#F6F0F8 border border-black rounded-md overflow-auto max-h-full mt-4" >
            <h1 className="flex justify-center pt-4">Containment</h1>
            <h3 className="flex justify-center pt-4" >Divider</h3>
            <div className="h-fit w-96 bg-purple-50 rounded-md border border-black p-6 ml-24">
              <Divider variant="md-horizontal-divider" ></Divider>
            </div>
          </div>
        </div>


        {/* column 3 */}
        <div>
          <div className="bg-#F6F0F8 border border-black rounded-md overflow-auto max-h-full " >
            <h1 className="flex justify-center pt-4" >Selection</h1>
            <h3 className="flex justify-center pt-4">CheckBoxes</h3>
            <div className="h-fit w-96 bg-purple-50 rounded-md border border-black p-6 ml-24 grid grid-cols-2" >
              <label className="flex flex-row gap-2 ">
                <Checkbox />
                Hello checkbox
              </label>
              <label className="flex flex-row gap-2 ">
                <Checkbox checked />
                Hello checkbox
              </label>
              <label className="flex flex-row gap-2">
                <Checkbox indeterminate />
                Hello checkbox
              </label>
              <label className="flex flex-row gap-2">
                <Checkbox indeterminate />
                Hello checkbox
              </label>
            </div>

            {/* Chips */}
            <h3 className="flex justify-center pt-4">Chips</h3>
            <div className="h-fit w-96 bg-purple-50 rounded-md border border-black p-6 ml-24 grid grid-cols-4 ">
              <div>
                <ChipSet><Chip variant="md-assist-chip" label="Assist">Assist</Chip></ChipSet>
                <ChipSet><Chip variant="md-assist-chip" label="Assist" >Assist</Chip></ChipSet>
                
              </div>
              <div>
                <ChipSet><Chip variant="md-filter-chip" label="Filter">Filter</Chip></ChipSet>
                <ChipSet><Chip variant="md-filter-chip" label="Filter">Filter</Chip></ChipSet>
                
              </div>
              <div>
                <ChipSet><Chip variant="md-input-chip" label="Input">Input</Chip></ChipSet>
                <ChipSet><Chip variant="md-input-chip" label="Input">Input</Chip></ChipSet>
                
              </div>
              <div>
                <ChipSet><Chip variant="md-suggestion-chip" label="Suggestion">Suggestion</Chip></ChipSet>
                <ChipSet><Chip variant="md-suggestionr-chip" label="Suggestion">Suggestion</Chip></ChipSet>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">

      <h1 className="text-4xl font-bold mb-8">Material Web Components for React</h1>
      <h2 className="text-md text-center w-1/2">This demo shows how native Material Web Components can be used in NextJS/React, TypeScript and Tailwind, with minimal configuration.</h2>
      <GitHubButton href="https://github.com/grayhatdevelopers">Star us on GitHub</GitHubButton>

      <br />

      <Dialog open={showDialog}>
        <div slot="headline">Dialog Demo and Actions</div>
        <form slot="content" id="form-id" method="dialog">
          <List
            style={{
              maxWidth: "300px",
              background: "transparent",
            }}
          >
            <ListItem
              type="link"
              href="https://github.com/grayhatdevelopers/material-web-react"
              target="_blank"
            >
              <div slot="headline">⭐️ on GitHub</div>
              <div slot="supporting-text">
                This will link you out in a new tab
              </div>
              <Icon slot="end">open_in_new</Icon>
            </ListItem>
            <ListItem
              type="link"
              href="https://github.com/grayhatdevelopers/material-web-react/edit/main/src/app/page.tsx"
              target="_blank"
            >
              <div slot="headline">Edit this page</div>
              <div slot="supporting-text">
                Want to make changes?
              </div>
              <Icon slot="end">open_in_new</Icon>
            </ListItem>
          </List>
        </form>
        <div slot="actions">
          <Button onClick={() => setShowDialog(false)}>Ok</Button>
        </div>
      </Dialog>

      <TextField variant="md-filled-text-field" placeholder="Hello world">
        <Icon slot="leading-icon">search</Icon>
      </TextField>

      <Switch />
      <div className="flex flex-row gap-2 items-center">
        <label className="flex flex-row gap-1 items-center">
          <Checkbox />
          Hello checkbox
        </label>
        <label className="flex flex-row gap-1 items-center">
          <Checkbox checked />
          Hello checkbox
        </label>
        <label className="flex flex-row gap-1 items-center">
          <Checkbox indeterminate />
          Hello checkbox
        </label>
      </div>

      <LinearProgress indeterminate></LinearProgress>
      <CircularProgress indeterminate></CircularProgress>

      <form className="flex flex-col justify-start gap-2">
        <span className="flex flex-row gap-2 items-center">
          <Radio id="cats-radio" name="animals" value="cats"></Radio>
          <label htmlFor="cats-radio">Cats</label>
        </span>
        <span className="flex flex-row gap-2 items-center">
          <Radio id="dogs-radio" name="animals" value="dogs"></Radio>
          <label htmlFor="dogs-radio">Dogs</label>
        </span>
        <span className="flex flex-row gap-2 items-center">
          <Radio id="birds-radio" name="animals" value="birds" checked></Radio>
          <label htmlFor="birds-radio">Birds</label>
        </span>
      </form>

      <Select>
        <SelectOption aria-label="blank"></SelectOption>
        <SelectOption selected value="apple">
          <div slot="headline">Apple</div>
        </SelectOption>
        <SelectOption value="apricot">
          <div slot="headline">Apricot</div>
        </SelectOption>
      </Select>

      <Slider></Slider>
      <Slider ticks value={50}></Slider>
      <Slider range value-start="25" value-end="75"></Slider>

      <Divider className="my-4" />

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
            Cucumbers are long green fruits that are just as long as this
            multi-line description
          </div>
        </ListItem>
        <ListItem
          type="link"
          href="https://google.com/search?q=buy+kiwis&tbm=shop"
          target="_blank"
        >
          <div slot="headline">Shop for Kiwis</div>
          <div slot="supporting-text">This will link you out in a new tab</div>
          <Icon slot="end">open_in_new</Icon>
        </ListItem>
      </List>

      <Divider className="my-4" />

      <ChipSet>
        {comics[0].tags.map((tag) => (
          <Chip key={tag} label={tag} variant="md-filter-chip" />
        ))}
      </ChipSet>
      <ChipSet>
        {comics[0].tags.map((tag) => (
          <Chip key={tag} label={tag} variant="md-input-chip" />
        ))}
      </ChipSet>
      <ChipSet>
        {comics[0].tags.map((tag) => (
          <Chip key={tag} label={tag} variant="md-suggestion-chip" />
        ))}
      </ChipSet>
      <ChipSet>
        {comics[0].tags.map((tag) => (
          <Chip key={tag} label={tag} variant="md-assist-chip" />
        ))}
      </ChipSet>
     

      <div className="flex flex-row gap-2">
        <Button variant="md-filled-button">Hello button!</Button>
        <Button variant="md-filled-tonal-button">Hello button!</Button>
        <Button variant="md-filled-elevated-button">Hello button!</Button>
        <Button variant="md-outlined-button">Hello button!</Button>
      </div>

      <div className="flex flex-row gap-2">
        <IconButton>
          {" "}
          <Icon>delete</Icon>
        </IconButton>
        <IconButton variant="md-filled-icon-button">
          {" "}
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton variant="md-filled-tonal-icon-button">
          {" "}
          <Icon>comment</Icon>
        </IconButton>

        <span style={{ position: "relative" }}>
          <IconButton
            id="usage-anchor"
            variant="md-outlined-icon-button"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            {" "}
            <Icon>share</Icon>
          </IconButton>
          <Menu
            id="usage-menu"
            anchor="usage-anchor"
            open={showMenu}
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <MenuItem>
              <div slot="headline">Apple</div>
            </MenuItem>
            <MenuItem>
              <div slot="headline">Banana</div>
            </MenuItem>
            <MenuItem>
              <div slot="headline">Cucumber</div>
            </MenuItem>
          </Menu>
        </span>
      </div>

      <Tabs>
        <PrimaryTab>Hello Tabs!</PrimaryTab>
        <SecondaryTab>Hello Tabs!</SecondaryTab>
      </Tabs>

      <div className="fixed bottom-4 right-4">
        <FAB
          onClick={() => {
            setShowDialog((oldState) => !oldState);
          }}
        >
          <Icon slot="icon">edit</Icon>
        </FAB>
      </div>
    </main>
  );
}

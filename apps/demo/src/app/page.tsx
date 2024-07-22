// @ts-nocheck
"use client";

// @TODO: Fix this. Right now, static generation doesn't seem to work with some
// Material Web Components.
// From my observation, it seems like the Dialog component relies on `document` even at its initialization.
// Specially the TreeWalker code.
// We should abstract that to allow it to work in SSG.
import dynamic from "next/dynamic";

import Button from "material-web-components-react/button";
import Card from "material-web-components-react/card";
import Checkbox from "material-web-components-react/checkbox";
import Chip, { ChipSet } from "material-web-components-react/chip";
const Dialog = dynamic(() => import("material-web-components-react/dialog"), { ssr: false });
import Divider from "material-web-components-react/divider";
import Elevation from "material-web-components-react/elevation";
import FAB from "material-web-components-react/fab";
import FocusRing from "material-web-components-react/focus-ring";
import Icon from "material-web-components-react/icon";
import IconButton from "material-web-components-react/icon-button";
import List, { ListItem } from "material-web-components-react/list";
import Menu, { MenuItem } from "material-web-components-react/menu";
import Progress from "material-web-components-react/progress";
import Radio from "material-web-components-react/radio";
import Ripple from "material-web-components-react/ripple";
import SegmentedButton, { SegmentedButtonSet } from "material-web-components-react/segmented-button";
import Select, { SelectOption } from "material-web-components-react/select";
import Slider from "material-web-components-react/slider";
import Switch from "material-web-components-react/switch";
import Tabs, { PrimaryTab } from "material-web-components-react/tabs";
import TextField from "material-web-components-react/textfield";

import Stack from "material-web-components-react/stack";

import React, { useState } from "react";
import { renderToString } from "react-dom/server";

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
        className="relative h-fit w-fit rounded-lg border border-[#CAC4CF] p-6 flex flex-col flex-wrap items-center justify-center gap-2"
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
  const [isPlayingProgressIndicators, setIsPlayingProgressIndicators] =
    useState(false);

  return (
    <>
      <Column id="column-a">
        <DemoSection title={"Actions"}>
          <ComponentDemo title={"Common buttons"}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Button variant="elevated" className="w-full">
                  Elevated
                </Button>
                <Button variant="filled" className="w-full">
                  Filled
                </Button>
                <Button variant="filled-tonal" className="w-full">
                  Filled Tonal
                </Button>
                <Button variant="outlined" className="w-full">
                  Outlined
                </Button>
                <Button variant="text" className="w-full">
                  Text
                </Button>
              </Stack>
              <Stack>
                <Button variant="elevated" className="w-full">
                  Icon
                  <Icon slot="icon">add</Icon>
                </Button>
                <Button variant="filled" className="w-full">
                  Icon
                  <Icon slot="icon">add</Icon>
                </Button>
                <Button variant="filled-tonal" className="w-full">
                  Icon
                  <Icon slot="icon">add</Icon>
                </Button>
                <Button variant="outlined" className="w-full">
                  Icon
                  <Icon slot="icon">add</Icon>
                </Button>
                <Button variant="text" className="w-full">
                  Icon
                  <Icon slot="icon">add</Icon>
                </Button>
              </Stack>
              <Stack>
                <Button
                  disabled
                  variant="elevated"
                  className="w-full"
                >
                  Elevated
                </Button>
                <Button disabled variant="filled" className="w-full">
                  Filled
                </Button>
                <Button
                  disabled
                  variant="filled-tonal"
                  className="w-full"
                >
                  Filled Tonal
                </Button>
                <Button
                  disabled
                  variant="outlined"
                  className="w-full"
                >
                  Outlined
                </Button>
                <Button disabled variant="text" className="w-full">
                  Text
                </Button>
              </Stack>
            </Stack>
          </ComponentDemo>

          <ComponentDemo title={"Floating action buttons"}>
            <Stack direction="row">
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
            </Stack>
          </ComponentDemo>

          <ComponentDemo title={"Icon buttons"}>
            <Stack direction="row" spacing={4}>
              <IconButton>
                <Icon>Settings</Icon>
              </IconButton>

              <IconButton variant="filled">
                <Icon>Settings</Icon>
              </IconButton>

              <IconButton variant="filled-tonal">
                <Icon>Settings</Icon>
              </IconButton>

              <IconButton variant="outlined-icon">
                <Icon>Settings</Icon>
              </IconButton>
            </Stack>
            <Stack direction="row" spacing={4}>
              <IconButton disabled>
                <Icon>Settings</Icon>
              </IconButton>

              <IconButton disabled variant="filled">
                <Icon>Settings</Icon>
              </IconButton>

              <IconButton disabled variant="filled-tonal">
                <Icon>Settings</Icon>
              </IconButton>

              <IconButton disabled variant="outlined">
                <Icon>Settings</Icon>
              </IconButton>
            </Stack>
          </ComponentDemo>

          <ComponentDemo title={"Segmented buttons"}>
            <SegmentedButtonSet>
              <SegmentedButton label="Day">
                <Icon slot="icon">calendar_view_day</Icon>
              </SegmentedButton>
              <SegmentedButton label="Week">
                <Icon slot="icon">calendar_view_week</Icon>
              </SegmentedButton>
              <SegmentedButton disabled label="Month" className="opacity-50">
                <Icon slot="icon">calendar_view_month</Icon>
              </SegmentedButton>
              <SegmentedButton label="Year">
                <Icon slot="icon">calendar_today</Icon>
              </SegmentedButton>
            </SegmentedButtonSet>
            <SegmentedButtonSet multiselect>
              <SegmentedButton label="XS"></SegmentedButton>
              <SegmentedButton label="S"></SegmentedButton>
              <SegmentedButton
                disabled
                label="M"
                className="opacity-50"
              ></SegmentedButton>
              <SegmentedButton label="L"></SegmentedButton>
              <SegmentedButton label="XL"></SegmentedButton>
            </SegmentedButtonSet>
          </ComponentDemo>
        </DemoSection>

        <DemoSection title="Communication">
          <ComponentDemo title={"Progress indicators"}>
            <Stack spacing={10}>
              <IconButton
                onClick={() =>
                  setIsPlayingProgressIndicators((oldState) => !oldState)
                }
              >
                <Icon
                  style={{
                    "fontVariationSettings": "'FILL' 1",
                  }}
                >
                  {isPlayingProgressIndicators ? "pause" : "play_arrow"}
                </Icon>
              </IconButton>
              <Progress
                indeterminate={isPlayingProgressIndicators}
                value={isPlayingProgressIndicators ? undefined : 0.6}
              ></Progress>
              <Progress
                variant="linear"
                indeterminate={isPlayingProgressIndicators}
                value={isPlayingProgressIndicators ? undefined : 0.6}
              ></Progress>
            </Stack>
          </ComponentDemo>
          <ComponentDemo title={"Elevation"}>
            <div className="w-[320px] h-[120px] px-10 py-8 flex flex-row gap-3 items-center justify-center">
              <div
                className="relative rounded-lg flex flex-row gap-10 justify-center items-center w-[200px] h-[100px]"
                style={{
                  // @ts-ignore
                  "--md-elevation-level": 1,
                }}
              >
                <Elevation></Elevation>
              </div>
              <div
                className="relative rounded-lg flex flex-row gap-10 justify-center items-center w-[200px] h-[100px]"
                style={{
                  // @ts-ignore
                  "--md-elevation-level": 2,
                }}
              >
                <Elevation></Elevation>
              </div>
              <div
                className="relative rounded-lg flex flex-row gap-10 justify-center items-center w-[200px] h-[100px]"
                style={{
                  // @ts-ignore
                  "--md-elevation-level": 3,
                }}
              >
                <Elevation></Elevation>
              </div>
            </div>
          </ComponentDemo>
          <ComponentDemo title={"Ripple"}>
            <div className="w-[320px] h-[120px] px-10 py-8 flex flex-row gap-3 items-center justify-center">
              <div className="relative rounded-lg flex flex-row gap-10 justify-center items-center w-[200px] h-[100px]">
                Tap me for effect
                <Ripple></Ripple>
              </div>
            </div>
          </ComponentDemo>
          <ComponentDemo title={"Focus ring"}>
            <div className="w-[320px] h-[120px] px-10 py-8 flex flex-row gap-3 items-center justify-center">
              <button className="relative px-4 py-2 rounded-full">
                <FocusRing></FocusRing>
                Use the keyboard to access me
              </button>
            </div>
          </ComponentDemo>
        </DemoSection>

        <DemoSection title="Containment">
          <ComponentDemo title={"Card"}>
            <div className="flex flex-row justify-center items-center gap-2">
              <Card className="p-2 aspect-square flex justify-between">
                <div className="flex flex-row justify-end items-center">
                  <IconButton>
                    <Icon>more_vert</Icon>
                  </IconButton>
                </div>
                <div className="flex flex-row justify-start items-center w-24">
                  Elevated
                </div>
              </Card>
              <Card
                variant="filled"
                className="p-2 aspect-square flex justify-between"
              >
                <div className="flex flex-row justify-end items-center">
                  <IconButton>
                    <Icon>more_vert</Icon>
                  </IconButton>
                </div>
                <div className="flex flex-row justify-start items-center w-24">
                  Filled
                </div>
              </Card>
              <Card
                variant="outlined"
                className="p-2 aspect-square flex justify-between"
              >
                <div className="flex flex-row justify-end items-center">
                  <IconButton>
                    <Icon>more_vert</Icon>
                  </IconButton>
                </div>
                <div className="flex flex-row justify-start items-center w-24">
                  Outlined
                </div>
              </Card>
            </div>
          </ComponentDemo>
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
                variant="text"
                onClick={() => setShowDialog((oldState) => !oldState)}
              >
                {showDialog ? "Hide dialog" : "Show dialog"}
              </Button>
              <Dialog onClosed={() => setShowDialog(false)} open={showDialog}>
                <div slot="headline">Dialog title</div>
                <form slot="content" id="form-id" method="dialog">
                  A simple dialog with free-form content.
                </form>
                <div slot="actions">
                  <Button
                    variant="text"
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
              <Chip variant="assist" label="Assist" checked>
                <Icon slot="icon">event</Icon>
                Assist
              </Chip>
              <Chip variant="filter" label="Filter" checked>
                Filter
              </Chip>
              <Chip variant="input" label="Input">
                Input
              </Chip>
              <Chip variant="suggestion" label="Suggestion">
                Suggestion
              </Chip>
            </ChipSet>
            <ChipSet>
              <Chip disabled variant="assist" label="Assist">
                <Icon slot="icon">event</Icon>
                Assist
              </Chip>
              <Chip disabled variant="filter" label="Filter">
                Filter
              </Chip>
              <Chip disabled variant="input" label="Input">
                Input
              </Chip>
              <Chip disabled variant="suggestion" label="Suggestion">
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

                <label
                  aria-disabled
                  className="flex flex-row gap-3 items-center"
                >
                  <Radio
                    disabled
                    id="third-radio"
                    name="group"
                    value="3"
                  ></Radio>
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
              variant="text"
              onClick={() => setShowMenu((oldState) => !oldState)}
            >
              {showMenu ? "Hide menu" : "Show menu"}
            </Button>
            <Menu
              onClosed={() => setShowMenu(false)}
              open={showMenu}
              id="usage-menu"
              anchor="usage-anchor"
            >
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
              <PrimaryTab className="px-4">
                <Icon>videocam</Icon>
                Video
              </PrimaryTab>
              <PrimaryTab className="px-4">
                <Icon>image</Icon>
                Photos
              </PrimaryTab>
              <PrimaryTab className="px-4">
                <Icon>music_note</Icon>
                Audio
              </PrimaryTab>
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
            <TextField variant="filled" placeholder="Filled">
              <Icon slot="leading-icon" className="ml-2">search</Icon>
              <IconButton slot="trailing-icon">
                <Icon>close</Icon>
              </IconButton>
            </TextField>
            <TextField
              disabled
              variant="filled"
              placeholder="Filled"
            >
              <Icon slot="leading-icon" className="ml-2">search</Icon>
              <IconButton slot="trailing-icon">
                <Icon>close</Icon>
              </IconButton>
            </TextField>

            <TextField variant="outlined" placeholder="Outlined">
              <Icon slot="leading-icon" className="ml-2">search</Icon>
              <IconButton slot="trailing-icon">
                <Icon>close</Icon>
              </IconButton>
            </TextField>
            <TextField
              disabled
              variant="outlined"
              placeholder="Outlined"
            >
              <Icon slot="leading-icon" className="ml-2">search</Icon>
              <IconButton slot="trailing-icon">
                <Icon>close</Icon>
              </IconButton>
            </TextField>
          </ComponentDemo>
        </DemoSection>
      </Column>
    </>
  );
}

// @ts-nocheck
"use client";

import AppBar from "material-web-components-react/app-bar";
import Badge from "material-web-components-react/badge";
import Button from "material-web-components-react/button";
import Card from "material-web-components-react/card";
import Checkbox from "material-web-components-react/checkbox";
import Chip, { ChipSet } from "material-web-components-react/chip";
import Dialog from "material-web-components-react/dialog";
import Divider from "material-web-components-react/divider";
import Elevation from "material-web-components-react/elevation";
import FAB from "material-web-components-react/fab";
import FocusRing from "material-web-components-react/focus-ring";
import Icon from "material-web-components-react/icon";
import IconButton from "material-web-components-react/icon-button";
import Item from "material-web-components-react/item";
import List, { ListItem } from "material-web-components-react/list";
import Menu, { MenuItem } from "material-web-components-react/menu";
import NavigationBar from "material-web-components-react/navigation-bar";
import { NavigationDrawerModal } from "material-web-components-react/navigation-drawer";
import NavigationTab from "material-web-components-react/navigation-tab";
import NavigationRail from "material-web-components-react/navigation-rail";
import Progress from "material-web-components-react/progress";
import Radio from "material-web-components-react/radio";
import Ripple from "material-web-components-react/ripple";
import SegmentedButton, { SegmentedButtonSet } from "material-web-components-react/segmented-button";
import Select, { SelectOption } from "material-web-components-react/select";
// import { BottomSheet } from "material-web-components-react/sheet";
import Slider from "material-web-components-react/slider";
import Switch from "material-web-components-react/switch";
import Tabs, { PrimaryTab } from "material-web-components-react/tabs";
import TextField from "material-web-components-react/text-field";

import Stack from "material-web-components-react/stack";

import pkgJson from "material-web-components-react/package.json?module=json"

import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import Link from "next/link";

const Column = ({ children, ...props }: { children: any; id: string }) => {
  return (
    <div
      className="w-full h-fit md:h-screen overflow-y-scroll flex-col gap-4 pt-4 pr-2"
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

const NavigationContent = ({ showNavigationModal, setShowNavigationModal }) => {
  return (
    <>
      <Link href={"/"}>
        <Item
          onClick={() => setShowNavigationModal?.(false)}
          className="mt-4 rounded-r-full w-full flex flex-row justify-between pr-2 select-none"
        >
          <Ripple />
          <div className="flex flex-row justify-start items-center gap-2">
            <Icon>stacked_inbox</Icon>
            All inboxes
          </div>
        </Item>
        <Divider className="mt-2" />
      </Link>
      <Link href={"/"}>
        <Item
          onClick={() => setShowNavigationModal?.(false)}
          className="mt-4 rounded-r-full w-full flex flex-row justify-between pr-2 select-none"
        >
          <Ripple />
          <div className="flex flex-row justify-start items-center gap-2">
            <Icon>inbox</Icon>
            Primary
          </div>
        </Item>
      </Link>
      <Link href={"/"}>
        <Item
          onClick={() => setShowNavigationModal?.(false)}
          className="mt-4 rounded-r-full w-full flex flex-row justify-between pr-2 select-none"
        >
          <Ripple />
          <div className="flex flex-row justify-start items-center gap-2">
            <Icon>group</Icon>
            Social
          </div>
        </Item>
      </Link>
      <Link href={"/"}>
        <Item
          onClick={() => setShowNavigationModal?.(false)}
          className="mt-4 rounded-r-full w-full flex flex-row justify-between pr-2 select-none"
        >
          <Ripple />
          <div className="flex flex-row justify-start items-center gap-2">
            <Icon>info</Icon>
            Updates
          </div>
        </Item>
      </Link>
      <Link href={"/"}>
        <Item
          onClick={() => setShowNavigationModal?.(false)}
          className="mt-4 rounded-r-full w-full flex flex-row justify-between pr-2 select-none"
        >
          <Ripple />
          <div className="flex flex-row justify-start items-center gap-2">
            <Icon>forum</Icon>
            Forums
          </div>
        </Item>
      </Link>
      <div className="ml-4 mt-6 text-sm opacity-70">All labels</div>
      <Link href={"/"}>
        <Item
          onClick={() => setShowNavigationModal?.(false)}
          className="mt-4 rounded-r-full w-full flex flex-row justify-between pr-2 select-none"
        >
          <Ripple />
          <div className="flex flex-row justify-start items-center gap-2">
            <Icon>star</Icon>
            Starred
          </div>
        </Item>
      </Link>
    </>
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
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [showModalBottomSheet, setShowModalBottomSheet] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isPlayingProgressIndicators, setIsPlayingProgressIndicators] =
    useState(false);

  const [showNavigationModal, setShowNavigationModal] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (showNavigationModal) {
        document.body.style.position = "fixed";
        document.body.style.top = `-${window.scrollY}px`;
      } else {
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [showNavigationModal]);

  return (
    <>
      <div
        id="sidebar-modal"
        className={
          "fixed z-50 top-0 left-0 h-screen w-screen bg-black transition-all " +
          (showNavigationModal
            ? "bg-opacity-50"
            : "pointer-events-none bg-opacity-0")
        }
      >
        <NavigationDrawerModal
          opened={showNavigationModal}
          pivot={"start"}
          onNavigationDrawerChanged={(value) => {
            setShowNavigationModal(value?.detail?.opened);
          }}
          className={
            "transition-transform " +
            (showNavigationModal ? "-translate-x-0" : "-translate-x-50")
          }
        >
          <NavigationContent
            showNavigationModal={showNavigationModal}
            setShowNavigationModal={setShowNavigationModal}
          />
        </NavigationDrawerModal>
      </div>
      <div
        id="sidebar"
        className={"hidden md:flex w-0 md:w-full z-10 top-0 left-0 h-screen"}
      >
        <div className="flex sticky top-0 overflow-y-auto h-screen">
        <div className="" id="nav-rail-container">
          <NavigationRail active-index="1">

            <IconButton slot="menu" id="rail-menu-button" onClick={() => setShowNavigationModal(true)}>
              <Icon>menu</Icon>
            </IconButton>
            <FAB slot="fab" variant="primary" href="/" lowered>
              <Icon slot="icon">search</Icon>
            </FAB>

            <NavigationTab disabled label="Home" active>
              <Icon slot="active-icon">home</Icon>
              <Icon slot="inactive-icon">home</Icon>
            </NavigationTab>
            <Link href={pkgJson.repository.url} target="_blank">
              <NavigationTab disabled label="GitHub">
                <Icon slot="active-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"></path>
                </svg></Icon>
                <Icon slot="inactive-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"></path>
                </svg></Icon>
              </NavigationTab>
            </Link>
            <Link href="https://www.npmjs.com/package/material-web-components-react" target="_blank">
              <NavigationTab disabled label="NPM" badgeValue={pkgJson.version} showBadge>
                <Icon slot="active-icon">deployed_code</Icon>
                <Icon slot="inactive-icon">deployed_code</Icon>
              </NavigationTab>
            </Link>
            <Link href="https://material-web.dev" target="_blank">
              <NavigationTab disabled label="Docs">
                <Icon slot="active-icon">book</Icon>
                <Icon slot="inactive-icon">book</Icon>
              </NavigationTab>
            </Link>
            <Link href="https://fonts.google.com/icons" target="_blank">
              <NavigationTab disabled label="Icons">
                <Icon slot="active-icon">interests</Icon>
                <Icon slot="inactive-icon">interests</Icon>
              </NavigationTab>
            </Link>
          </NavigationRail>
        </div>
        </div>
      </div>
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
                <Button disabled variant="elevated" className="w-full">
                  Elevated
                </Button>
                <Button disabled variant="filled" className="w-full">
                  Filled
                </Button>
                <Button disabled variant="filled-tonal" className="w-full">
                  Filled Tonal
                </Button>
                <Button disabled variant="outlined" className="w-full">
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
          <ComponentDemo title={"Badges"}>
            <Stack direction="row" spacing={3}>
              <IconButton>
                <Icon
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  <Badge />
                  notifications
                </Icon>
              </IconButton>
              <IconButton>
                <Icon
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  <Badge value={3} />
                  mail
                </Icon>
              </IconButton>
            </Stack>
          </ComponentDemo>

          <ComponentDemo title={"Progress indicators"}>
            <Stack direction="row" spacing={10}>
              <IconButton
                onClick={() =>
                  setIsPlayingProgressIndicators((oldState) => !oldState)
                }
              >
                <Icon
                  style={{
                    fontVariationSettings: "'FILL' 1",
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
          {/* <ComponentDemo title={"Bottom sheet"}>
            <div className="w-full">
              <Button
                variant="text"
                onClick={() => setShowBottomSheet((oldState) => !oldState)}
              >
                {showBottomSheet ? "Hide bottom sheet" : "Show bottom sheet"}
              </Button>
              <Button
                variant="text"
                onClick={() => setShowModalBottomSheet((oldState) => !oldState)}
              >
                {showModalBottomSheet ? "Hide modal bottom sheet" : "Show modal bottom sheet"}
              </Button>
            </div>
          </ComponentDemo> */}
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
                  <Button variant="text" onClick={() => setShowDialog(false)}>
                    Ok
                  </Button>
                </div>
              </Dialog>
            </div>
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

          <ComponentDemo title={"Items"}>
            <ul>
              <Item>Fruits</Item>
              <Divider></Divider>
              <Item>Apple</Item>
              <Item>Banana</Item>
              <ListItem>
                <div slot="headline">Cucumber</div>
                <div slot="supporting-text">
                  Cucumbers are long green fruits that are just as long as this
                  multi-line description
                </div>
              </ListItem>
            </ul>
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

          <ComponentDemo title={"Navigation bar"}>
            <NavigationBar
              className="w-full flex flex-row items-center"
              index={0}
            >
              <NavigationTab className="px-4" label="Explore" disabled>
                <Icon
                  slot="active-icon"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  home
                </Icon>
                <Icon slot="inactive-icon">home</Icon>
              </NavigationTab>
              <NavigationTab className="px-4" label="People" disabled>
                <Icon
                  slot="active-icon"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  group
                </Icon>
                <Icon slot="inactive-icon">group</Icon>
              </NavigationTab>
              <NavigationTab
                className="px-4"
                label="Updates"
                disabled
                onClick={() => {
                  alert("clicked!");
                }}
              >
                <Icon
                  slot="active-icon"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  notifications
                </Icon>
                <Icon slot="inactive-icon">notifications</Icon>
              </NavigationTab>
            </NavigationBar>
          </ComponentDemo>

          <ComponentDemo title={"Navigation drawer"}>
            <div className="w-full">
              <Button
                variant="text"
                onClick={() => setShowNavigationModal((oldState) => !oldState)}
              >
                {showNavigationModal ? "Hide drawer" : "Show drawer"}
              </Button>
            </div>
          </ComponentDemo>

          <ComponentDemo title={"Top app bars"}>
            <div className="relative w-[300px] !bg-[#fef7fe]">
              <AppBar className={"sticky top-0 !bg-[#fef7fe]"}>
                <IconButton slot="leading">
                  <Icon>arrow_back</Icon>
                </IconButton>

                <div slot="headline">Center-aligned</div>

                <IconButton slot="trailing">
                  <Icon>more_vert</Icon>
                </IconButton>
              </AppBar>
            </div>
            <div className="relative w-[300px] !bg-[#fef7fe]">
              <AppBar className={"sticky top-0 !bg-[#fef7fe]"}>
                <IconButton slot="leading">
                  <Icon>arrow_back</Icon>
                </IconButton>

                <div slot="headline">Small</div>

                <IconButton slot="trailing">
                  <Icon>attach_file</Icon>
                </IconButton>
                <IconButton slot="trailing">
                  <Icon>calendar_today</Icon>
                </IconButton>
                <IconButton slot="trailing">
                  <Icon>more_vert</Icon>
                </IconButton>
              </AppBar>
            </div>
            <div className="relative w-[300px] h-32 overflow-y-scroll !bg-[#fef7fe]">
              <AppBar
                variant="medium"
                className={"sticky top-0 z-40 !bg-[#fef7fe]"}
                onExpansionChange={(expanded) => setIsExpanded(expanded)}
                style={{
                  // @ts-ignore
                  "--md-elevation-level": 1,
                }}
              >
                {isExpanded && <Elevation />}

                <IconButton slot="leading">
                  <Icon>arrow_back</Icon>
                </IconButton>

                <div slot="headline" className="line-clamp-1">
                  Medium (with Elevation)
                </div>
                <div slot="headline-expanded">Medium (with Elevation)</div>

                <IconButton slot="trailing">
                  <Icon>attach_file</Icon>
                </IconButton>
                <IconButton slot="trailing">
                  <Icon>calendar_today</Icon>
                </IconButton>
                <IconButton slot="trailing">
                  <Icon>more_vert</Icon>
                </IconButton>
              </AppBar>

              <div id="body" className="h-40 w-full"></div>
            </div>
            <div className="relative w-[300px] h-32 overflow-y-scroll !bg-[#fef7fe]">
              <AppBar
                variant="large"
                className={"sticky top-0 z-40 !bg-[#fef7fe]"}
              >
                <IconButton slot="leading">
                  <Icon>arrow_back</Icon>
                </IconButton>

                <div slot="headline">Large</div>
                <div slot="headline-expanded">Large</div>

                <IconButton slot="trailing">
                  <Icon>attach_file</Icon>
                </IconButton>
                <IconButton slot="trailing">
                  <Icon>calendar_today</Icon>
                </IconButton>
                <IconButton slot="trailing">
                  <Icon>more_vert</Icon>
                </IconButton>
              </AppBar>

              <div id="body" className="h-40 w-full"></div>
            </div>
          </ComponentDemo>
        </DemoSection>

        <DemoSection title={"Text Inputs"}>
          <ComponentDemo title={"Text Fields"}>
            <TextField variant="filled" placeholder="Filled">
              <Icon slot="leading-icon" className="ml-2">
                search
              </Icon>
              <IconButton slot="trailing-icon">
                <Icon>close</Icon>
              </IconButton>
            </TextField>
            <TextField disabled variant="filled" placeholder="Filled">
              <Icon slot="leading-icon" className="ml-2">
                search
              </Icon>
              <IconButton slot="trailing-icon">
                <Icon>close</Icon>
              </IconButton>
            </TextField>

            <TextField variant="outlined" placeholder="Outlined">
              <Icon slot="leading-icon" className="ml-2">
                search
              </Icon>
              <IconButton slot="trailing-icon">
                <Icon>close</Icon>
              </IconButton>
            </TextField>
            <TextField disabled variant="outlined" placeholder="Outlined">
              <Icon slot="leading-icon" className="ml-2">
                search
              </Icon>
              <IconButton slot="trailing-icon">
                <Icon>close</Icon>
              </IconButton>
            </TextField>
          </ComponentDemo>
        </DemoSection>
      </Column>
      {/* 
      <BottomSheet
        open={showBottomSheet}
        onOpenChange={(open) => setShowBottomSheet(open)}
        className="z-50"
      >
        <div slot="title">
          Actions
        </div>
        <div slot="content" className='w-full h-full flex flex-row justify-evenly items-center pb-6 gap-2'>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                share
              </Icon>
            </IconButton>
            <span className="text-sm">Share</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                add
              </Icon>
            </IconButton>
            <span className="text-sm">Add to</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                delete
              </Icon>
            </IconButton>
            <span className="text-sm">Trash</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                archive
              </Icon>
            </IconButton>
            <span className="text-sm">Archive</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                settings
              </Icon>
            </IconButton>
            <span className="text-sm">Settings</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                favorite
              </Icon>
            </IconButton>
            <span className="text-sm">Favorite</span>
          </div>
        </div>
      </BottomSheet>
      <BottomSheet
        variant="modal"
        open={showModalBottomSheet}
        onOpenChange={(open) => setShowModalBottomSheet(open)}
        className="z-50"
      >
        <div slot="title">
          Actions
        </div>
        <div slot="content" className='w-full h-full flex flex-row justify-evenly items-center pb-6 gap-2'>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                share
              </Icon>
            </IconButton>
            <span className="text-sm">Share</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                add
              </Icon>
            </IconButton>
            <span className="text-sm">Add to</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                delete
              </Icon>
            </IconButton>
            <span className="text-sm">Trash</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                archive
              </Icon>
            </IconButton>
            <span className="text-sm">Archive</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                settings
              </Icon>
            </IconButton>
            <span className="text-sm">Settings</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconButton>
              <Icon>
                favorite
              </Icon>
            </IconButton>
            <span className="text-sm">Favorite</span>
          </div>
        </div>
      </BottomSheet> 
*/}
    </>
  );
}

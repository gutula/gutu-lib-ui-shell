import { createRequire } from "node:module";
import type React from "react";

import { ShellProvider } from "./providers";
import type { ShellKind, ShellProviderContract, UiRegistry } from "./types";

const require = createRequire(import.meta.url);
type ReactModule = typeof import("react");

function getReactRuntime(): ReactModule {
  return require("react") as ReactModule;
}

type ShellProps = {
  title: string;
  shell: ShellKind;
  registry: UiRegistry;
  providers?: ShellProviderContract | undefined;
  children?: React.ReactNode;
};

function ShellFrame({ title, shell, registry, providers, children }: ShellProps) {
  const routeCount = registry.embeddedPages.filter((entry) => entry.shell === shell).length;
  const ReactRuntime = getReactRuntime();
  const content = ReactRuntime.createElement(
    "div",
    { "data-shell": shell },
    ReactRuntime.createElement(
      "header",
      undefined,
      ReactRuntime.createElement("h1", undefined, title),
      ReactRuntime.createElement("p", undefined, `${routeCount} route(s) registered`)
    ),
    ReactRuntime.createElement("main", undefined, children)
  );

  if (!providers) {
    return content;
  }

  return ReactRuntime.createElement(ShellProvider, { value: providers }, content);
}

export function AdminShell(props: Omit<ShellProps, "title" | "shell">) {
  return ShellFrame({ title: "Admin Shell", shell: "admin", ...props });
}

export function PortalShell(props: Omit<ShellProps, "title" | "shell">) {
  return ShellFrame({ title: "Portal Shell", shell: "portal", ...props });
}

export function SiteShell(props: Omit<ShellProps, "title" | "shell">) {
  return ShellFrame({ title: "Site Shell", shell: "site", ...props });
}

import { NavbarDesktopComponent } from "./desktop";
import { NavbarMobileComponent } from "./mobile";

export function NavbarComponent() {
  return (
    <>
      <NavbarMobileComponent />
      <NavbarDesktopComponent />
    </>
  );
}

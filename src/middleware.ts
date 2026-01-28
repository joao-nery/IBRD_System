import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const url = request.nextUrl.clone();
  const { pathname, searchParams } = url;

  // Verifica se é mobile
  const isMobile = device.type === "mobile";

  // Nome do cookie que vamos usar para salvar a preferência
  const COOKIE_NAME = "site-preference";

  // --- LOGICA 1: O usuário clicou em "Ir para site completo"? ---
  // Se a URL for "/?pref=desktop", vamos criar o cookie e redirecionar para a Home limpa.
  if (pathname === "/" && searchParams.get("pref") === "desktop") {
    // Cria a resposta de redirecionamento para "/" (limpando a url)
    const response = NextResponse.redirect(new URL("/", request.url));

    // Define o cookie que libera o acesso (dura 1 hora, ou ajuste o maxAge)
    response.cookies.set(COOKIE_NAME, "desktop", {
      path: "/",
      maxAge: 30 * 30, // 1 hora
    });

    return response;
  }

  // --- LOGICA 2: Verificações de Redirecionamento ---

  // Checa se o usuário já tem o cookie de preferência
  const hasDesktopPreference =
    request.cookies.get(COOKIE_NAME)?.value === "desktop";

  // CENÁRIO A: Mobile acessando a Home
  if (isMobile && pathname === "/") {
    // Se ele tem o cookie, DEIXA PASSAR (não redireciona pro Hub)
    if (hasDesktopPreference) {
      return NextResponse.next();
    }
    // Se não tem cookie, manda pro Hub
    url.pathname = "/programs/hub";
    return NextResponse.redirect(url);
  }

  // // CENÁRIO B: Desktop acessando o Hub
  // // (Opcional: se você quiser bloquear desktop de ver o hub)
  // if (!isMobile && pathname === "/programs/hub") {
  //   url.pathname = "/";
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

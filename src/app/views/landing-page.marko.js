// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projpratica$1.0.0/src/app/views/landing-page.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>FAÇA SEU LOGIN | Buddyget</title><link rel=stylesheet href=/caminho/css/create-spend.css><link rel=stylesheet href=/caminho/css/home.css><link rel=stylesheet href=/caminho/css/forms.css><link rel=stylesheet href=/caminho/css/partials/header.css></head><body><header class=header-pages><h1 class=main-title>Buddyget</h1><a href=/profile><img id=profile src=caminho/images/profile.jpg alt=Perfil></a></header><div id=land><br><h1>Por favor, faça login no Buddyget!!</h1><br><br><a href=/cadastro>Ainda não possui uma conta? Cadastre-se!</a><br><a href=/login>Já possui uma conta? Faça login!</a><h3>You got this, buddy!</h3><br></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "24");

  _preferred_script_location_tag({}, out);

  out.w("</body><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projpratica$1.0.0/src/app/views/landing-page.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

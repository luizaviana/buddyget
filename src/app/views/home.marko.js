// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projpratica$1.0.0/src/app/views/home.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Home | Buddyget</title><link rel=stylesheet href=/caminho/css/home.css><link rel=stylesheet href=/caminho/css/partials/header.css><link href=https://fonts.google.com/specimen/Commissioner?selection.family=Commissioner|Nunito:wght@800 rel=stylesheet></head><body id=home-back><header class=header-pages><h1 class=main-title>Buddyget</h1><div class=links><div class=selected><a href=/home>Visão Geral</a><div class=block></div></div><a href=/statistics>Estatísticas</a></div><br><br><br><br><a href=/profile><img id=profile src=caminho/images/profile.jpg alt=Perfil></a></header><br><br><br><br><br><br><br><br><div id=landing><h1>Seja Bem vindo!!</h1><h3>You got this, buddy!!</h3></div><br><br><br><br><img src=caminho/images/Buddyget.png><a class=add-spend href=/create-spend>+</a>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

  _preferred_script_location_tag({}, out);

  out.w("</body><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projpratica$1.0.0/src/app/views/home.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

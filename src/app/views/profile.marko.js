// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projpratica$1.0.0/src/app/views/profile.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Perfil | Buddyget</title><link rel=stylesheet href=/caminho/css/create-spend.css><link rel=stylesheet href=/caminho/css/home.css><link rel=stylesheet href=/caminho/css/partials/header.css></head><body><header class=header-pages><h1 class=main-title>Buddyget</h1><div class=links><a href=/home>Visão Geral</a><a href=/statistics>Estatísticas</a></div><a href=/profile><img id=profile src=caminho/images/profile.jpg alt=Perfil></a></header><div id=profile><br><h1>Seus Dados</h1><table class=table><thead class=thead-dark><tr><th>ID:</th><th>Nome:</th><th>Email:</th><th>Orçamento:</th><th>ALTERAR:</th></tr></thead><tbody>");

  var $for$0 = 0;

  marko_forOf(data.usuario, function(usuario) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(usuario.idUsuario) +
      "</td><td>" +
      marko_escapeXml(usuario.nome) +
      "</td><td>" +
      marko_escapeXml(usuario.email) +
      "</td><td>" +
      marko_escapeXml(usuario.orcamento) +
      "</td><td><i class=\"glyphicon glyphicon-edit\"></i>&nbsp&nbsp<a href=/atualizaDadosUsuario>Editar</a></td></tr>");
  });

  out.w("<tr></tr></tbody><br><br></table><br></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "40");

  _preferred_script_location_tag({}, out);

  out.w("</body><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projpratica$1.0.0/src/app/views/profile.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

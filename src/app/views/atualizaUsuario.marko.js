// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projpratica$1.0.0/src/app/views/atualizaUsuario.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Atualizar Perfil | Buddyget</title><link rel=stylesheet href=/caminho/css/create-spend.css><link rel=stylesheet href=/caminho/css/partials/header.css><link href=https://fonts.google.com/specimen/Commissioner?selection.family=Commissioner|Nunito:wght@800 rel=stylesheet></head><body><header class=header-pages><h1 class=main-title>Buddyget</h1><div class=links><div class=selected><a href=/home>Visão Geral</a><div class=block></div></div><a href=/statistics>Estatísticas</a></div><a href=/profile><img id=profile src=caminho/images/profile.jpg alt=Perfil></a> </header><form method=post class=form" +
    marko_attr("action", "/atualizaUsuario/" + data.usuario.idUsuario) +
    "><fieldset><legend>Atualize sua conta no Buddyget</legend><div class=input-block><label for=nome>Nome:</label><input type=text name=nome id=nome" +
    marko_attr("value", "" + data.usuario.nome) +
    "></div><div class=input-block><label for=senha>Senha:</label><input type=text name=senha id=senha" +
    marko_attr("value", "" + data.usuario.senha) +
    "></div><div class=input-block><label for=orcamento>Orçamento mensal:<span>(Em R$)</span></label><input type=number name=orcamento id=orcamento" +
    marko_attr("value", "" + data.usuario.orcamento) +
    "></div></fieldset><button class=confirm-button type=submit>Atualizar Perfil!</button> </form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projpratica$1.0.0/src/app/views/atualizaUsuario.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

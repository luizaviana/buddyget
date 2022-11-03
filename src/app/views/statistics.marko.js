// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projpratica$1.0.0/src/app/views/statistics.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Estatísticas | Buddyget</title><link rel=stylesheet href=/caminho/css/home.css><link rel=stylesheet href=/caminho/css/partials/header.css></head><body><nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><div class=\"collapse navbar-collapse justify-content-end\" id=navbarNav><header class=header-pages><h1 class=main-title>Buddyget</h1><div class=links><a href=/home>Visão Geral</a><div class=selected><a href=/statistics>Estatísticas</a><div class=block></div></div></div><a href=/profile><img id=profile src=caminho/images/profile.jpg alt=Perfil></a></header></div></nav><br><table class=table><thead class=thead-dark><tr><th>Data:</th><th>Descrição:</th><th>Preço:</th><th>Setor:</th><th>ATUALIZAR</th><th>REMOVER</th></tr></thead><tbody>");

  var $for$0 = 0;

  marko_forOf(data.despesa, function(despesa) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(despesa.dataDespesa) +
      "</td><td>" +
      marko_escapeXml(despesa.descricao) +
      "</td><td>" +
      marko_escapeXml(despesa.valorDespesa) +
      "</td><td>" +
      marko_escapeXml(despesa.nome) +
      "</td><td><i class=\"glyphicon glyphicon-edit\"></i>&nbsp&nbsp<a" +
      marko_attr("href", "/atualizarDespesa/" + (despesa.idDespesa == null ? "" : despesa.idDespesa)) +
      ">Editar</a></td><td><i class=\"glyphicon glyphicon-remove-circle\"></i>&nbsp&nbsp<a" +
      marko_attr("href", "/removeDespesa/" + despesa.idDespesa) +
      ">Remover</a></td></tr>");
  });

  out.w("<tr></tr></tbody><br><br><thead class=thead-dark id=segunda-thead><tr><th>Valor Total:</th><th>Restante do Orçamento:</th></tr></thead><tbody><tr><td>" +
    marko_escapeXml(data.soma) +
    "</td><td>" +
    marko_escapeXml(data.orcamento) +
    "</td></tr></tbody></table>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "52");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projpratica$1.0.0/src/app/views/statistics.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

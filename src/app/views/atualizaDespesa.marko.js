// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projpratica$1.0.0/src/app/views/atualizaDespesa.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Atualizar Gasto | Buddyget</title><link rel=stylesheet href=/caminho/css/create-spend.css><link rel=stylesheet href=/caminho/css/partials/header.css></head><body><header class=header-pages><h1 class=main-title>Buddyget</h1><div class=links><div class=selected><a href=/home>Visão Geral</a><div class=block></div></div><a href=/statistics>Estatísticas</a></div> </header><form method=post class=spending onsubmit" +
    marko_attr("action", "/atualizarDadosDespesa/" + data.idDespesa) +
    "><fieldset><legend>Atualiza Gasto</legend><div class=input-block><label for=description>Descrição:</label><textarea name=descricao id=descricao cols=30 rows=5></textarea></div><div class=input-block><label for=orcamento>Valor: <strong>*</strong><span>*Em R$:</span></label><input type=number name=orcamento id=orcamento></div><div class=input-block><label for=sector>Setor: <strong>*</strong></label><select name=sector id=sector><option value selected>Selecione um setor</option><option value=1>Doméstico</option><option value=2>Alimentação</option><option value=3>Comunicação</option><option value=4>Transporte</option><option value=5>Lazer</option><option value=6>Outro</option></select><br><br><br></div><input type=date id=data name=data><p class=note><strong>*</strong> Obrigatório</p></fieldset><button class=confirm-button type=submit>Atualizar Despesa!</button></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "44");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projpratica$1.0.0/src/app/views/atualizaDespesa.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

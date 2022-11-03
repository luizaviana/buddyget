// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projpratica$1.0.0/src/app/views/cadastro.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Cadastro | Buddyget</title><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css><link rel=stylesheet type=text/css href=/caminho/css/forms.css><link href=https://fonts.google.com/specimen/Commissioner?selection.family=Commissioner|Nunito:wght@800 rel=stylesheet></head><body><div class=account><main><form method=post class=form onsubmit action=/insertBDUsuario><fieldset><legend>Crie sua conta no Buddyget</legend><div class=input-block><label for=nome>Nome:</label><input type=text name=nome id=nome></div><div class=input-block><label for=login>E-mail:</label><input type=text name=login id=login></div><div class=input-block><label for=senha>Senha:</label><input type=text name=senha id=senha></div><div class=input-block><label for=orcamento>Orçamento mensal:<span>(Em R$)</span></label><input type=number name=orcamento id=orcamento></div></fieldset><input type=submit value=Confirmar class=confirm-button><a href=/login>Já possui uma conta? Faça login!</a></form></main></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projpratica$1.0.0/src/app/views/cadastro.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

TemplateHooks = function TemplateHooks__apply(tpl, hooks){
  var unsupported = _.without(_.keys(hooks), 'created', 'rendered', 'destroyed');

  if (unsupported.length > 0){
    throw new Error("Unsupported Template hooks:" + unsupported.join(", "));
  }

  _.extend(tpl, hooks);
};

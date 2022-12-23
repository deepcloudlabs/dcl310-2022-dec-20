var crmViewModel = new CrmViewModel();
$(
    () => {
        ko.applyBindings(crmViewModel);
    }
);
import { NavigatedData, Page } from '@nativescript/core';
import { PropertiesViewModel } from './properties-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new PropertiesViewModel();
}
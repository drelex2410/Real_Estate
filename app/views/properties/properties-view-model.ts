import { Observable } from '@nativescript/core';
import { Property, PropertyModel } from '../../models/property.model';

export class PropertiesViewModel extends Observable {
  private _properties: Array<Property>;
  private _searchQuery: string = '';

  constructor() {
    super();
    this._properties = PropertyModel.sampleProperties;
  }

  get properties(): Array<Property> {
    return this._properties;
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  set searchQuery(value: string) {
    if (this._searchQuery !== value) {
      this._searchQuery = value;
      this.notifyPropertyChange('searchQuery', value);
    }
  }

  onSearch(args: any) {
    const searchBar = args.object;
    const searchValue = searchBar.text.toLowerCase();
    
    this._properties = PropertyModel.sampleProperties.filter(property => 
      property.title.toLowerCase().includes(searchValue) ||
      property.location.toLowerCase().includes(searchValue)
    );
    
    this.notifyPropertyChange('properties', this._properties);
  }

  onClear() {
    this._properties = PropertyModel.sampleProperties;
    this.notifyPropertyChange('properties', this._properties);
  }

  onProfileTap() {
    // TODO: Implement profile navigation
    console.log('Navigate to profile');
  }

  invest(args: any) {
    const property = args.object.bindingContext;
    // TODO: Implement investment flow
    console.log(`Investing in property: ${property.title}`);
  }
}
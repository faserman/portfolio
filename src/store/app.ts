import { observable, action } from 'mobx';
import { Work, Contacts } from '../models/app'
import { utils } from '../utils/index'

class AppStore {
  @observable works: Work[] = [];
  @observable contacts: Contacts[] = [];
  @observable idWork: string = '';
  @observable workDrawerIsOpen: boolean = false;
  @observable scroll: number = 0;

  @action
  setWorks(result: Work[]) {
    this.works = result;
  };

  @action
  setIdWork(id: string) {
    this.idWork = id;
  };

  @action
  setContacts(result: Contacts[]) {
    this.contacts = result;
  };

  @action
  setScroll(result: number) {
    this.scroll = result;
  };

  @action
  openWorkDrawer(id: string) {
    if (this.idWork === id) {
      this.workDrawerIsOpen = true;
    } 
  };

  @action.bound
  closeWorkDrawer() {
    this.workDrawerIsOpen = false;
    this.clearIdWork();
  };

  @action
  clearIdWork() {
    this.idWork = '';
  };

  @action.bound
  gettingWorks() {
    try {
      const result = utils.works;
      this.setWorks(result)
    } catch(error) {
      console.log(error);
    }
  };

  @action.bound
  gettingContacts() {
    try {
      const result = utils.contacts;
      this.setContacts(result);
    } catch(error) {
      console.log(error);
    }
  };

  @action.bound
  toggleWorkDrawer = (id: string) => {
    this.clearIdWork()
    this.setIdWork(id);
    this.openWorkDrawer(id);
  };
};

export const appStore = new AppStore();
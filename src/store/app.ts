import { observable, action } from 'mobx';
import { Work } from '../models/app'
import { utils } from '../utils/index'

class AppStore {
  @observable works: Work[] = [];
  @observable idWork: string = '';
  @observable workDrawerOpen: boolean = false;

  @action
  setWorks(result: Work[]) {
    this.works = result;
  };

  @action
  setIdWork(id: string) {
    this.idWork = id;
  };

  @action
  setModeWorkDrawer(id: string) {
    if (this.idWork === id) {
      this.workDrawerOpen = !this.workDrawerOpen;
    } 
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
  }

  @action.bound
  toggleWorkDrawer = (id: string) => {
    this.clearIdWork()
    this.setIdWork(id);
    this.setModeWorkDrawer(id);
  }
}

export const appStore = new AppStore();
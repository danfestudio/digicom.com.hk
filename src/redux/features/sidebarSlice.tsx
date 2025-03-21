import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface toggleState {
  value: boolean;
  tab: string;
  subtab: string;
  submenu: string;
}

const initialState: toggleState = {
  value: false,
  tab: '',
  subtab: '',
  submenu: '',
};

export const sidebarSlice = createSlice({
  name: 'sidebarSlice',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.value = true;
    },
    closeSidebar: (state) => {
      state.value = false;
    },
    activeTab: (state, action: PayloadAction<any>) => {
      state.tab = action.payload
    },
    activeSubTab: (state, action: PayloadAction<any>) => {
      state.subtab = action.payload
    },
    setActiveSubMenu: (state, action: PayloadAction<any>) => {
      state.submenu = action.payload
    },
    
  },
});



export const { openSidebar, closeSidebar, activeTab, activeSubTab, setActiveSubMenu } = sidebarSlice.actions;
// export default sidebarSlice.reducer;
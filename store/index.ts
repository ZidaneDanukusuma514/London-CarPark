import axios from "axios";
import { create } from "zustand";
import { RadiusdataProps } from "./interface";

interface LatLngProps {
  lat: number;
  lng: number;
}

export interface StoreRoot {
  zustand: string;
  Radiusdata: RadiusdataProps | null;
  centerPosition: LatLngProps;
  handleClickedmark: (point: any) => void;
  handleRadius: (props?: LatLngProps) => void;
}

export const useStore = create<StoreRoot>((set) => ({
  zustand: "This is Zustand",
  Radiusdata: null,
  centerPosition: { lat: 51.49754703531337, lng: -0.1327343774881866 },
  handleClickedmark: (point: any) => {
    set(() => ({
      centerPosition: { lat: point.lat, lng: point.lng },
    }));
  },
  handleRadius: async (props?: LatLngProps) => {
    const respon = await axios.get(
      `https://api.tfl.gov.uk/Place/?Lat=${props?.lat}&Lon=${props?.lng}&radius=100000&type=CarPark`
    );
    set({
      Radiusdata: respon.data,
    });
  },
}));

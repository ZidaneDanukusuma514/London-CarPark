export interface AdditionalProperty {
  $type: string;
  category: string;
  key: string;
  sourceSystemKey: string;
  value: string;
  modified: Date;
}

export interface Place {
  $type: string;
  id: string;
  url: string;
  commonName: string;
  distance: number;
  placeType: string;
  additionalProperties: AdditionalProperty[];
  childrenUrls: any[];
  lat: number;
  lon: number;
}

export interface RadiusdataProps {
  $type: string;
  centrePoint: number[];
  places: Place[];
}

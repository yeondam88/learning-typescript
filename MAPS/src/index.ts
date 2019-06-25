import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map', {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});

customMap.addMarker(user);
customMap.addMarker(company);

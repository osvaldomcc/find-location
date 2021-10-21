interface Ip {
  ip: string;
  location: Location;
  domains: string[];
  as: As;
  isp: string;
}

interface As {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

interface Location {
  country: string;
  region: string;
  timezone: string;
}
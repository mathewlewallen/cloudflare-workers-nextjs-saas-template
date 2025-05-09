export type styleType = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export const styles: styleType[] = [
  {
    id: "osm-liberty",
    title: "OSM Liberty",
    url: "https://maputnik.github.io/osm-liberty/style.json",
    thumbnail: "https://maputnik.github.io/thumbnails/osm-liberty.png"
  },
  {
    id: "maptiler-basic-gl-style",
    title: "Maptiler Basic",
    url: "https://cdn.jsdelivr.net/gh/openmaptiles/klokantech-basic-gl-style@v1.9/style.json",
    thumbnail: "https://maputnik.github.io/thumbnails/klokantech-basic.png"
  },
  {
    id: "dark-matter",
    title: "Dark Matter",
    url: "https://cdn.jsdelivr.net/gh/openmaptiles/dark-matter-gl-style@v1.8/style.json",
    thumbnail: "https://maputnik.github.io/thumbnails/dark-matter.png"
  },
  {
    id: "positron",
    title: "Positron",
    url: "https://cdn.jsdelivr.net/gh/openmaptiles/positron-gl-style@v1.8/style.json",
    thumbnail: "https://maputnik.github.io/thumbnails/positron.png"
  },
  {
    id: "osm-bright",
    title: "OSM Bright",
    url: "https://cdn.jsdelivr.net/gh/openmaptiles/osm-bright-gl-style@v1.9/style.json",
    thumbnail: "https://maputnik.github.io/thumbnails/osm-bright.png"
  },
  {
    id: "maptiler-toner-gl-style",
    title: "Toner",
    url: "https://cdn.jsdelivr.net/gh/openmaptiles/toner-gl-style@339e5b7/style.json",
    thumbnail: "https://maputnik.github.io/thumbnails/toner.png"
  },
  {
    id: "os-zoomstack-outdoor",
    title: "Zoomstack Outdoor",
    url: "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/v2/styles/open-zoomstack-outdoor/style.json",
    thumbnail: "https://maputnik.github.io/thumbnails/os-zoomstack-outdoor.png"
  },
  {
    id: "os-zoomstack-road",
    title: "Zoomstack Road",
    url: "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/v2/styles/open-zoomstack-road/style.json",
    thumbnail: "https://maputnik.github.io/thumbnails/os-zoomstack-road.png"
  },
  {
    id: "os-zoomstack-light",
    title: "Zoomstack Light",
    url: "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/v2/styles/open-zoomstack-light/style.json",
    thumbnail: "https://maputnik.github.io/thumbnails/os-zoomstack-light.png"
  },
  {
    id: "os-zoomstack-night",
    title: "Zoomstack Night",
    url: "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/v2/styles/open-zoomstack-night/style.json",
    thumbnail: "https://maputnik.github.io/thumbnails/os-zoomstack-night.png"
  },
  {
    id: "empty-style",
    title: "Empty Style",
    url: "https://cdn.jsdelivr.net/gh/maputnik/editor@9cf74ca405d2be0608b57db8109cf3a6af5b9f49/src/config/empty-style.json",
    thumbnail: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAQAAAAHDYbIAAAAEUlEQVR42mP8/58BDhiJ4wAA974H/U5Xe1oAAAAASUVORK5CYII="
  }
]
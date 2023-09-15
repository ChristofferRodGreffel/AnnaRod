// Images as objects

export const imageObjects = [];

class ImageObject {
  constructor(typeClass, imageSource, name, size, price, filterSize, sold = false, reserved = false) {
    this.typeClass = typeClass;
    this.imageSource = imageSource;
    this.name = name;
    this.size = size;
    this.price = price;
    this.visible = true;
    this.filterSize = filterSize;
    this.sold = sold;
    this.reserved = reserved;

    imageObjects.push(this);
  }
}

// Object variables eliminating typos and for easy correction
let painting = {
  // Paint types
  akvarel: "akvarel",
  akryl: "akryl",
  olie: "olie",
  pulver: "pulver",
  other: "other",

  // Paint sizes
  small: "small",
  medium: "medium",
  large: "large",
};

// List of objects
const image1 = new ImageObject(painting.akvarel, "images/art/1.jpg", "Akvarel kort (pris er pr. stk)", "10,5 x 15", 30, painting.small);

const image2 = new ImageObject(painting.akryl, "images/art/2.jpg", "Rengøringskonen (med ramme) | Akryl", "34 x 34", 500, painting.medium);

const image3 = new ImageObject(painting.akryl, "images/art/61.jpg", "Viceværten (med ramme) | Akryl", "34 x 34", 500, painting.medium);

const image4 = new ImageObject(painting.akryl, "images/art/62.jpg", "Kunstneren (med ramme) | Akryl", "34 x 34", 500, painting.medium);

const image5 = new ImageObject(painting.akryl, "images/art/3.jpg", "Sopranen (med ramme) | Akryl", "34 x 34", 500, painting.medium, true);

const image6 = new ImageObject(painting.akryl, "images/art/4.jpg", "Bassen (med ramme) | Akryl", "34 x 34", 500, painting.medium, true);

const image7 = new ImageObject(painting.akryl, "images/art/5.jpg", "Akryl på lærred", "60 x 60", 400, painting.large, true);

const image8 = new ImageObject(painting.akryl, "images/art/6.jpg", "Akryl på lærred", "70 x 60", 700, painting.large);

const image9 = new ImageObject(painting.akryl, "images/art/7.jpg", "Akryl på lærred", "65 x 54", 500, painting.large);

const image10 = new ImageObject(painting.akryl, "images/art/8.jpg", "Akryl på papir (inklusiv ramme)", "20 x 15", 300, painting.medium);

const image11 = new ImageObject(painting.akryl, "images/art/8-1.jpg", "Akryl på papir (inklusiv ramme)", "20 x 15", 300, painting.medium);

const image12 = new ImageObject(painting.akryl, "images/art/9.jpg", "Akryl på papir (inklusiv ramme)", "26 x 20", 350, painting.medium);

const image13 = new ImageObject(painting.akryl, "images/art/10.jpg", "Akryl på papir (inklusiv ramme)", "26 x 20", 350, painting.medium);

const image14 = new ImageObject(painting.akryl, "images/art/11.jpg", "Akryl på papir (inklusiv ramme)", "26 x 20", 350, painting.medium);

const image15 = new ImageObject(painting.akryl, "images/art/12.jpg", "Akryl på papir (inkl. passepartout)", "35 x 28", 300, painting.medium);

const image16 = new ImageObject(painting.akryl, "images/art/13.jpg", "Akryl på papir (inkl. passepartout)", "35 x 28", 300, painting.medium);

const image17 = new ImageObject(painting.akryl, "images/art/14.jpg", "Akryl på papir (inkl. passepartout)", "30 x 21", 300, painting.medium);

const image18 = new ImageObject(painting.akryl, "images/art/15.jpg", "Akryl på papir (inkl. passepartout)", "24 x 18", 250, painting.medium);

const image19 = new ImageObject(painting.akryl, "images/art/16.jpg", "Akryl på papir (inkl. passepartout)", "24 x 18", 250, painting.medium);

const image20 = new ImageObject(painting.akryl, "images/art/17.jpg", "Akryl på papir (inkl. passepartout)", "30 x 24", 250, painting.medium);

const image21 = new ImageObject(painting.akryl, "images/art/18.jpg", "Akryl og pen på papir", "20 x 20", 250, painting.medium);

const image22 = new ImageObject(painting.other, "images/art/20.jpg", "ArtGraf på papir", "30 x 24", 250, painting.medium);

const image23 = new ImageObject(painting.other, "images/art/21.jpg", "ArtGraf på papir", "30 x 24", 250, painting.medium);

const image24 = new ImageObject(painting.other, "images/art/22.jpg", "ArtGraf på papir", "30 x 24", 250, painting.medium);

const image25 = new ImageObject(painting.other, "images/art/23.jpg", "ArtGraf på papir", "30 x 24", 250, painting.medium);

const image26 = new ImageObject(painting.akvarel, "images/art/24.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 21", 250, painting.medium);

const image27 = new ImageObject(painting.akvarel, "images/art/25.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 250, painting.medium);

const image28 = new ImageObject(painting.akvarel, "images/art/26.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 20", 300, painting.medium);

const image29 = new ImageObject(painting.akvarel, "images/art/27.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 20", 300, painting.medium);

const image30 = new ImageObject(painting.akvarel, "images/art/28.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 20", 300, painting.medium);

const image31 = new ImageObject(painting.akvarel, "images/art/29.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 21", 300, painting.medium);

const image32 = new ImageObject(painting.akvarel, "images/art/30.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 20", 300, painting.medium);

const image33 = new ImageObject(painting.akvarel, "images/art/31.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 300, painting.medium);

const image34 = new ImageObject(painting.akvarel, "images/art/32.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 21", 300, painting.medium);

const image35 = new ImageObject(painting.akvarel, "images/art/33.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 300, painting.medium);

const image36 = new ImageObject(painting.akvarel, "images/art/34.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 20", 250, painting.medium);

const image37 = new ImageObject(painting.akvarel, "images/art/35.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 250, painting.medium);

const image38 = new ImageObject(painting.akvarel, "images/art/36.jpg", "Akvarel på papir (inkl. passepartout)", "24 x 18", 250, painting.medium);

const image39 = new ImageObject(painting.akvarel, "images/art/37.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 250, painting.medium, true);

const image40 = new ImageObject(painting.akvarel, "images/art/38.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 350, painting.medium, true);

const image41 = new ImageObject(painting.akvarel, "images/art/39.jpg", "Akvarel på papir (inkl. passepartout)", "24 x 18", 250, painting.medium);

const image42 = new ImageObject(painting.akvarel, "images/art/40.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 250, painting.medium);

const image43 = new ImageObject(painting.akvarel, "images/art/46.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 200, painting.medium);

const image44 = new ImageObject(painting.akvarel, "images/art/47.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 350, painting.medium, true);

const image45 = new ImageObject(painting.akvarel, "images/art/48.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 350, painting.medium);

const image46 = new ImageObject(painting.akvarel, "images/art/49.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 350, painting.medium);

const image47 = new ImageObject(painting.other, "images/art/50.jpg", "Mixed media (inkl. passepartout)", "30 x 24", 400, painting.medium);

const image48 = new ImageObject(painting.akryl, "images/art/51.jpg", "Akryl på papir", "24 x 18", 300, painting.medium);

const image49 = new ImageObject(painting.akryl, "images/art/52.jpg", "Akryl på papir", "17 x 24", 250, painting.medium);

const image50 = new ImageObject(painting.akvarel, "images/art/53.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 20", undefined, painting.medium, true);

const image51 = new ImageObject(painting.akvarel, "images/art/54.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 20", 350, painting.medium);

const image52 = new ImageObject(painting.akvarel, "images/art/55.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 20", 300, painting.medium);

const image53 = new ImageObject(painting.akryl, "images/art/56.jpg", "Akryl på papir", "30 x 24", 300, painting.medium);

const image54 = new ImageObject(painting.akryl, "images/art/57.jpg", "Akryl på papir", "30 x 21", 200, painting.medium);

const image55 = new ImageObject(painting.akryl, "images/art/58.jpg", "Akryl på papir (inklusiv ramme)", "26 x 20", 400, painting.medium);

const image56 = new ImageObject(painting.akryl, "images/art/59.jpg", "Akryl på papir (inklusiv ramme)", "26 x 20", 400, painting.medium);

const image57 = new ImageObject(painting.akryl, "images/art/60.jpg", "Akryl på lærred (3 stk.)", "20 x 20", 750, painting.large);

const image58 = new ImageObject(painting.akryl, "images/art/63.jpg", "Akryl på lærred (inklusiv ramme)", "33 x 33", 500, painting.medium);

const image59 = new ImageObject(painting.akryl, "images/art/64.jpg", "Akryl på lærred", "54 x 45", 700, painting.large);

const image60 = new ImageObject(painting.akryl, "images/art/65.jpg", "Akryl på lærred", "50 x 50", 500, painting.large);

const image61 = new ImageObject(painting.akryl, "images/art/66.jpg", "Akryl på papir", "24 x 18", 200, painting.medium);

const image62 = new ImageObject(painting.akvarel, "images/art/67.jpg", "Akvarel på papir (inkl. passepartout)", "29 x 20", 300, painting.medium);

const image63 = new ImageObject(painting.akvarel, "images/art/68.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 20", 250, painting.medium);

const image64 = new ImageObject(painting.akvarel, "images/art/69.jpg", "Akvarel på groft papir", "26 x 18", 200, painting.medium);

const image65 = new ImageObject(painting.other, "images/art/70.jpg", "Mixed media", "24 x 18", 350, painting.medium);

const image66 = new ImageObject(painting.other, "images/art/71.jpg", "Mixed media (inkl. passepartout)", "24 x 18", 250, painting.medium);

const image67 = new ImageObject(painting.other, "images/art/72.jpg", "Mixed media (inkl. passepartout)", "35 x 28", 450, painting.medium);

const image68 = new ImageObject(painting.akvarel, "images/art/73.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 400, painting.medium);

const image69 = new ImageObject(painting.akvarel, "images/art/74.jpg", "Akvarel på papir (inkl. passepartout)", "35 x 28", 350, painting.medium);

const image70 = new ImageObject(painting.akryl, "images/art/75.jpg", "Akryl på papir (inklusiv passepartout)", "30 x 21", 300, painting.medium);

const image71 = new ImageObject(painting.akvarel, "images/art/76.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 400, painting.medium);

const image72 = new ImageObject(painting.akvarel, "images/art/77.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 400, painting.medium);

const image73 = new ImageObject(painting.akvarel, "images/art/78.jpg", "Akvarel på papir (inkl. passepartout)", "30 x 24", 250, painting.medium);

const image74 = new ImageObject(painting.other, "images/art/79.jpg", "ArtGraf på papir (inkl. passepartout)", "30 x 26", 400, painting.medium);

const image75 = new ImageObject(painting.other, "images/art/80.jpg", "ArtGraf på papir (inkl. passepartout)", "30 x 24", 400, painting.medium);

const image76 = new ImageObject(painting.other, "images/art/81.jpg", "ArtGraf på papir (inkl. passepartout)", "40 x 30", undefined, painting.medium, true);

const image77 = new ImageObject(painting.other, "images/art/82.jpg", "Mixed media", "30 x 21", 350, painting.medium);

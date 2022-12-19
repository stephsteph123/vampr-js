class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  };
  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVamp = 0;
    let currVamp = this;
    while (currVamp.creator) {
      currVamp = currVamp.creator;
      numOfVamp++;
    }
    return numOfVamp
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.creator === null) {
      return true;
    } else if (this.creator.name === "root") {
      return true;
    }
    return false;
  };

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      let newVamp = {
        "name": name,
        "yearConverted": this.yearConverted,
        "offspring": this.offspring,
        "creator": this.creator
      }
      console.log(newVamp)
      return newVamp
  }
  return null;
  };

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let offie = this.offspring
    let count = 0;
    Object.values(offie).forEach(key => {
      if (key === "undefined") {
        if (key.offspring === "undefined") {
          if(key.offspring.offspring === "undefined") {
            return count
          }
        }
      } else {
        count = count + 1;
      }
})
return count;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }
}

module.exports = Vampire;


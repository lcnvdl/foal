/**
 * FoalTS
 * Copyright(c) 2017-2022 Loïc Poullain <loic.poullain@centraliens.net>
 * Released under the MIT License.
 */

// Used in foalts2-storage:
export class ConcreteDisk {
  write() {
    throw new Error('internal-test package: write called');
  }

  read() {
    throw new Error('internal-test package: read called');
  }

  readSize() {
    return Promise.resolve(22);
  }

  delete() {
    throw new Error('internal-test package: delete called');
  }
}

// Used in foalts2-core:
export class ConcreteSessionStore {

}

export const aNum = 1;

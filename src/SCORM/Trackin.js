export default class Tracking {

  constructor(sco, total) {
    this._sco = sco;
    this._total = total;
    this._count = 1;
    this._current = 0;
    this._views = [];

  }

  ////////////////////////////////////////////////////////////////////////

  push(current) {

    for (let i = 0; i < this._views.length; i++) {
      if (this._views[i] === current) return;
    }
    this._views.push(current);
    this._advance();
  }

  //////////////////////////////////////////////////////////////////////////

  saveLocation(location) {

    if (this._sco.getConnetionStatus()) {
      this._sco.setLocation(location);
      this._sco.save();
    }
  }

  ///////////////////////////////////////////////////////////////////

  getLocation() {
    let location = 1;
    if (this._sco.getConnetionStatus())
      location = parseInt(this._sco.getLocation());

    this._fillViews(location);
    return this._current;
  }
  ///////////////////////////////////////////////////////////////

  _fillViews(location) {
    while (this._current < location) {
      this._views.push(this._current);
      this._current++;
    }
    this._count = this._current - 1;
    this._advance();
  }

  //////////////////////////////////////////////////////////////////

  closeCourse() {
    if (this._sco.getConnetionStatus()) {
      this._sco.setLessonStatus("passed");
      this._sco.save();
      this._sco.setScore(100); //BRAN
    }
    return true;
  }

  ////////////////////////////////////////////////////////////////////////

  exit() {
    this._sco.exitNotComplete();
  }

  ////////////////////////////////////////////////////////////////////////

  _advance() {
    this._count += 1;
    let percent = (this._count / this._total) * 100;

    if (this._sco.getConnetionStatus()) {
      this._sco.setScore(percent);
      this._sco.save();
      this._check();
    }
  }

  /////////////////////////////////////////////////////////////////////////

  _check() {
    let score = this._sco.getScore();
    if (score === 100)
      this._completionCourse();
  }

  ////////////////////////////////////////////////////////////

  _completionCourse() {
    if (this._sco.getConnetionStatus()) {
      this._sco.setLessonStatus("completed");
      this._sco.save();
    }
  }

}

'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'simple-word-highlighting:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },


  toggle() {   ///generally highlighting selected word
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      range = editor.getSelectedBufferRange()
      marker = editor.markBufferRange(range)
      decoration = editor.decorateMarker(marker, {type: 'highlight', class: 'my-line-class'}) //adding your custom className which you can set in the file located in the folder "Styles"
    }
  }

};

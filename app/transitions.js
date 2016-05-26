export default function() {
  this.transition(
    this.fromRoute('notes.note.index'),
    this.toRoute('notes.note.edit'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('notes.index'),
    this.toRoute('notes.note'),
    this.use('toDown'),
    this.reverse('toUp')
  );
}

/**
 * MOCK availability for the booking placeholder only.
 * Real availability comes from Go Rendez-Vous once its embed replaces
 * <GoRendezVousWidget /> — do not maintain real slots here.
 */
export const mockWeek = {
  label: 'Week of 19 Oct',
  services: [
    'Lorem ipsum dolor — [60] min',
    'Consectetur adipiscing — [45] min',
    'Sed do eiusmod — [60] min',
  ],
  days: [
    { dow: 'Mon', date: '19 Oct', slots: ['9:00', '10:30', '14:00'] },
    { dow: 'Tue', date: '20 Oct', slots: ['10:30', '13:00', '16:30', '18:00'] },
    { dow: 'Wed', date: '21 Oct', slots: [] as string[] },
    { dow: 'Thu', date: '22 Oct', slots: ['9:00', '11:00', '15:30'] },
    { dow: 'Fri', date: '23 Oct', slots: ['9:30', '12:00'] },
  ],
  /** Pre-selected slot, as [dayIndex, slotIndex]. */
  initial: [1, 0] as [number, number],
};

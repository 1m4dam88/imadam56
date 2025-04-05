module.exports = {
    params: {
        designator: 'S',
        reverse: false
        from: undefined,
        to: undefined,
        A: undefined,
        B: undefined,
        C: undefined,
        D: undefined,
    },
    body: p => {
      const standard = `
        (module RollerEncoder_Panasonic_EVQWGD001 (layer F.Cu) (tedit 6040A10C)
          (fp_text reference REF** (at 0 0) (layer F.Fab)
            (effects (font (size 1 1) (thickness 0.15)))
          )
          (fp_text value RollerEncoder_Panasonic_EVQWGD001 (at -0.1 9) (layer F.Fab)
            (effects (font (size 1 1) (thickness 0.15)))
          )
          (fp_line (start -8.5 5.5) (end -8.5 7.5) (layer F.SilkS) (width 0.2))
          (fp_line (start -8.4 -6.4) (end 8.4 -6.4) (layer Dwgs.User) (width 0.12))
          (fp_line (start 8.4 -6.4) (end 8.4 7.4) (layer Dwgs.User) (width 0.12))
          (fp_line (start 8.4 7.4) (end -8.4 7.4) (layer Dwgs.User) (width 0.12))
          (fp_line (start -8.4 7.4) (end -8.4 -6.4) (layer Dwgs.User) (width 0.12))
          (fp_line (start 9.8 7.3) (end 9.8 -6.3) (layer Edge.Cuts) (width 0.05))
          (fp_line (start 7.4 -6.3) (end 7.4 7.3) (layer Edge.Cuts) (width 0.05))
          (fp_line (start 6.9 -6.5) (end -4 -6.5) (layer F.SilkS) (width 0.2))
          (fp_line (start -7.9 -6.5) (end -8.5 -6.5) (layer F.SilkS) (width 0.2))
          (fp_line (start -8.5 -6.5) (end -8.5 -4.5) (layer F.SilkS) (width 0.2))
          (fp_line (start -8.5 7.5) (end 6.9 7.5) (layer F.SilkS) (width 0.2))
          (fp_line (start 9.5 -6.6) (end 7.7 -6.6) (layer Edge.Cuts) (width 0.05))
          (fp_line (start 7.7 7.6) (end 9.5 7.6) (layer Edge.Cuts) (width 0.05))
          (fp_arc (start 7.7 7.3) (end 7.4 7.3) (angle -90) (layer Edge.Cuts) (width 0.05))
          (fp_arc (start 9.5 7.3) (end 9.5 7.6) (angle -90) (layer Edge.Cuts) (width 0.05))
          (fp_arc (start 7.7 -6.3) (end 7.7 -6.6) (angle -90) (layer Edge.Cuts) (width 0.05))
          (fp_arc (start 9.5 -6.3) (end 9.8 -6.3) (angle -90) (layer Edge.Cuts) (width 0.05))
          (fp_text user %R (at -2.4 -7.3) (layer F.SilkS)
            (effects (font (size 0.8 0.8) (thickness 0.2)))
          )
          (pad S1 thru_hole circle (at -6.85 -6.2) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask))
          (pad S2 thru_hole circle (at -5 -6.2) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask))
          (pad A thru_hole circle (at -5.625 -3.81) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask))
          (pad B thru_hole circle (at -5.625 -1.27) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask))
          (pad C thru_hole circle (at -5.625 1.27) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask))
          (pad D thru_hole circle (at -5.625 3.81) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at -5.625 6.3) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
      `
}

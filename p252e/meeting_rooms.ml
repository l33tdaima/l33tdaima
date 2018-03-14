(**
 * Definition for an interval.
 *)
type interval_t = {
  s: int;
  e: int
}
(**
 * @param {Interval[]} intervals
 * @return {boolean}
 *)
let can_attend_meetings intervals =
  let sorted = List.sort (fun a b -> a.s - a.s) intervals in
  (* use a tuple of (has_overlap * end) as accumulator to fold *)
  let result = List.fold_left (fun pend v ->
    if snd pend = false || v.s < fst pend then (v.e, false)
    else (v.e, true)
  ) (-1, true) sorted in
  snd result

(* TEST *)
let () =
  let tests = [
    [(0, 30); (5, 10); (15, 20)];
    [(0, 3); (5, 10); (15, 20)];
  ] in
  List.iter (fun t ->
    let it = List.map (fun v -> { s = fst v; e = snd v}) t in
    print_endline ("Can attend meeting ->" ^ 
                  string_of_bool @@ can_attend_meetings it);
  ) tests

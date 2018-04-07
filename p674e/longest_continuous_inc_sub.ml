(* Build the program by
  ocaml -I ml_modules ml_modules/print_list.cma p674e/longest_continuous_inc_sub.ml
*)

(**
 * @param {number[]} nums
 * @return {number}
 *)
type accumulator = {
  count  : int;
  maxlen : int;
  prev   : int;
}
let find_length_of_LCIS nums =
  (* val fold_left : ('a -> 'b -> 'a) -> 'a -> 'b list -> 'a
     fold the list by an accumulator of a record of (prev, count, max) *)
  let ans = List.fold_left (fun acc num ->
      let c = if (num > acc.prev) then acc.count + 1 else 1
      in
      { count = c;
        maxlen = max acc.maxlen c;
        prev = num;
      }
    ) 
    { count=0; maxlen = 0; prev = min_int; }
    nums
  in ans.maxlen

(* TEST *)
let () =
  let tests = [
    [];
    [9];
    [9;7];
    [1;3;5;4;7];
    [6;3;5;6;7];
    [1;3;5;6;7];
    [2;2;2;2;2];
  ] in
  List.iter (fun t ->
    print_string "Longest continuous increaing subsequence of ";
    Print_list.print_list_of_int t;
    print_endline (" -> " ^ string_of_int @@ find_length_of_LCIS t)
  ) tests

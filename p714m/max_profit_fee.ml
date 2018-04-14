(* Build the program by
  ocaml -I ml_modules ml_modules/print_list.cma p714m/max_profit_fee.ml
*)

(**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 *)
type dp = {
  max_closed : int;
  max_open   : int;
}
let max_profit prices fee =
  let ans = List.fold_left (fun dp p ->
    (* for JS, -fee can be added both places, but ocaml will overflow if added to dp.max_open *)
    {
      max_closed = max dp.max_closed (dp.max_open + p);
      max_open   = max dp.max_open (dp.max_closed - p - fee);
    } )
    { max_closed = 0; max_open = min_int; }
    prices in
  ans.max_closed

(* TEST *)
let () =
  let tests = [
    ([2], 0);
    ([1;3], 2);
    ([1;3;2;8;4;9], 2);
  ] in
  List.iter (fun t ->
    let ans = max_profit (fst t) (snd t) in
    print_string "Max profit by Inf transaction in ";
    Print_list.print_list_of_int @@ fst t;
    print_string (" with fee = " ^ string_of_int @@ snd t);
    print_endline (" -> " ^ string_of_int @@ ans)
  ) tests

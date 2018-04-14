(* Build the program by
  ocaml -I ml_modules ml_modules/print_list.cma p121e/max_profit_1.ml
*)

(**
 * @param {number[]} prices
 * @return {number}
 *)
 type dp = {
  max_closed : int;
  max_open   : int;
}
let max_profit prices =
  let ans = List.fold_left (fun dp p ->
      { max_closed = max dp.max_closed (p - dp.max_open);
        max_open = min dp.max_open p; }
    )
    { max_closed = 0; max_open = max_int; }
    prices in
  ans.max_closed

let () =
  let tests = [
    [1];
    [7; 1; 5; 3; 6; 4];
    [7; 6; 4; 3; 1];
  ] in
  List.iter (fun t ->
    print_string "Max profit by one transaction in";
    Print_list.print_list_of_int t;
    print_endline (" -> " ^ string_of_int @@ max_profit t)
  ) tests

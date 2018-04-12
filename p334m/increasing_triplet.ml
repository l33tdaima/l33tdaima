(* Build the program by
  ocaml -I ml_modules ml_modules/print_list.cma p334m/increasing_triplet.ml
*)

(**
 * @param {int list} nums
 * @return {bool}
 *)
type accumulator = {
  t1 : int;
  t2 : int;
  ret: bool;
}
let increasing_triplet nums =
  let ans = List.fold_left (fun a num ->
      if (num < a.t1) then
        { t1 = num; t2 = a.t2; ret = a.ret; }
      else if (num < a.t2) then
        { t1 = a.t1; t2 = num; ret = a.ret; }
      else
        { t1 = a.t1; t2 = a.t2; ret = true; }
    )
    { t1 = max_int; t2 = max_int; ret = false; }
    nums in
  ans.ret

(* TEST *)
let () =
  let tests = [
    [1];
    [1;4];
    [1;4;2];
    [1;2;3;4;5];
    [5;4;3;2;1];
    [3;2;1;4;2;3];
    [1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;10;0;0;0;10000];
  ] in
  List.iter (fun t ->
    print_string "An increasing subsequence of length 3 exists in ";
    Print_list.print_list_of_int t;
    print_endline (" -> " ^ string_of_bool @@ increasing_triplet t)
  ) tests

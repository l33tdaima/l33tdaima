let rec print_list lst print_func = match lst with
    [] -> ()
  | h::[] -> print_func h
  | h::l -> print_func h; print_string ", "; print_list l print_func

(* val print_list_of_int: int list -> unit *)
let print_list_of_int lst =
  print_string "[ ";
  print_list lst print_int;
  print_string " ]"

(* build the bytecode library
  ocamlc -a ml_modules/print_list.ml -o ml_modules/print_list.cma
*)

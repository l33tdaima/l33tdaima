(**
 * @param people: int*int list
 * @return int*int list
 *)
let reconstruct_queue people =
  let sorted = List.stable_sort (fun (h_a,k_a) (h_b,k_b) ->
    if (h_a = h_b) then
      (k_a - k_b) (* increasing k *)
    else
      (h_b - h_a) (* decreasing h *)
  ) people in
  List.fold_left (fun queue (h,k) ->
    (* insert into the position using k value *)
    let rec insert_by_k (h,k) n = function
      | [] -> [(h,k)]
      | hd :: tl as l -> if n = 0 then (h, k) :: l
                         else hd :: insert_by_k (h,k) (n-1) tl in
    insert_by_k (h,k) k queue
  ) [] sorted

(* TEST *)
open Printf
let () =
  let tests = [
    [];
    [(7,0)];
    [(7,0); (4,4); (7,1); (5,0); (6,1); (5,2)]
  ] in
  List.iter (fun test ->
    print_string "After reconstructing queue -> [ ";
    List.iter (fun (h,k) ->
      printf "(%d,%d) " h k
    ) @@ reconstruct_queue @@ test;
    print_endline "]";
  ) tests;
  print_newline ();

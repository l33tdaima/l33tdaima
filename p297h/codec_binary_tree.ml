(* Build the program by
  ocaml -I ml_modules ml_modules/print_list.cma str.cma p297h/codec_binary_tree.ml
*)

(**
 * Definition for a binary tree
 *)
type 'a tree_node =
  | Leaf
  | Node of 'a tree_node * 'a * 'a tree_node

(**
  * Encodes a tree to a single string.
  *
  * @param {Function} to_str
  * @param {TreeNode} root
  * @return {string}
  *)
let rec serialize to_str root = match root with
  | Leaf -> "#"
  | Node (l, v, r) ->
    (to_str v) ^ "," ^ (serialize to_str l) ^ "," ^ (serialize to_str r)

(**
 * Decodes your encoded data to tree.
 *
 * @param {Function} from_str
 * @param {string} data
 * @return {TreeNode}
 *)
open Str
let deserialize from_str data =
  let str_lst = Str.split (regexp ",") data in
  (* Print_list.print_list_of_string str_lst; *)
  let rec deser lst = match lst with
    | [] -> (Leaf, [])
    | hd :: tl ->
      if (hd = "#") then (Leaf, tl)
      else 
        let v = from_str hd in
        let (l, lrem) = deser tl in
        let (r, rrem) = deser lrem in
        (Node (l, v, r), rrem)
  in
  let (tree, _) = deser str_lst in
  tree

(* TEST *)
let () =
  let tests = [
    "#";
    "1,#,#";
    "1,#,2,#,#";
    "1,2,#,#,3,4,5,#,#,#,#";
  ] in
  List.iter (fun t ->
    print_string ("serialize deserialize \"" ^ t);
    let actual = serialize string_of_int @@ deserialize int_of_string t in
    print_string ("\" -> " ^ actual);
    print_endline ("\" -> " ^ string_of_bool (actual = t))
  ) tests

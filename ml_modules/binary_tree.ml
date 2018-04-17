(* Build the bytecode library
  ocamlc -a ml_modules/binary_tree.ml -o ml_modules/binary_tree.cma
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

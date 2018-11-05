// kotlinc max_distance.kt -include-runtime -d test.jar && java -jar test.jar && rm -f *.jar
class Solution {
    fun maxDistance(arrays: List<List<Int>>): Int {
        var res = 0
        var minVal = 30000
        var maxVal = -30000
        for (a in arrays) {
            res = maxOf(res, a.last() - minVal, maxVal - a.first())
            minVal = minOf(minVal, a.first())
            maxVal = maxOf(maxVal, a.last())
        }
        return res
    }
}

fun main(args: Array<String>): Unit {
    val tests = listOf(
        listOf(listOf(1),
               listOf(5)),
        listOf(listOf(5,7),
               listOf(4,5,6),
               listOf(2,5,7,9),
               listOf(3,4,5,6,7),
               listOf(4,6),
               listOf(5,8,9,10))
    )
    tests.forEach {
        val sol = Solution()
        println("Max distance in arrays -> " + sol.maxDistance(it))
    }
}

//your JS code here. If required.
public static void printAMazePaths(int i, int j, int N, int M, String psf) {
    // Base case
    if (i == N && j == M) {
        System.out.println(psf);
        return;
    }

    // Move horizontally if within bounds
    if (j < M) {
        printAMazePaths(i, j + 1, N, M, psf + "h");
    }

    // Move vertically if within bounds
    if (i < N) {
        printAMazePaths(i + 1, j, N, M, psf + "v");
    }
}

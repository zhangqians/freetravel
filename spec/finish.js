/**
 * Created by zhagnian on 16-8-17.
 */
export default function (done) {
    return (err) => {
        if (err) done.fail(err);
        else done();
    }
}

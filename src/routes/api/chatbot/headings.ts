import type { RequestHandler } from '@sveltejs/kit';

const headings = ["Modulus operator", "Boolean expressions", "Logical operators", "Something else"];
const contents = [String.raw`<p>
<a name="@default352"></a>
<a name="@default353"></a></p><p>The <b>modulus operator</b> works on integers and yields the remainder
when the first operand is divided by the second. In Python, the
modulus operator is a percent sign (<code>%</code>). The syntax is the same
as for other operators:</p><pre class="verbatim">&gt;&gt;&gt; quotient = 7 / 3
&gt;&gt;&gt; print quotient
2
&gt;&gt;&gt; remainder = 7 % 3
&gt;&gt;&gt; print remainder
1
</pre><p>So 7 divided by 3 is 2 with 1 left over.</p><p>The modulus operator turns out to be surprisingly useful. For
example, you can check whether one number is divisible by another—if
<tt>x % y</tt> is zero, then <tt>x</tt> is divisible by <tt>y</tt>.
<a name="@default354"></a></p><p>Also, you can extract the right-most digit
or digits from a number. For example, <tt>x % 10</tt> yields the
right-most digit of <tt>x</tt> (in base 10). Similarly <tt>x % 100</tt>
yields the last two digits.</p>`,
    `<p>A <b>boolean expression</b> is an expression that is either true
    or false. The following examples use the 
    operator <tt>==</tt>, which compares two operands and produces
    <tt>True</tt> if they are equal and <tt>False</tt> otherwise:</p><pre class="verbatim">&gt;&gt;&gt; 5 == 5
    True
    &gt;&gt;&gt; 5 == 6
    False
    </pre><p><tt>True</tt> and <tt>False</tt> are special
    values that belong to the type <tt>bool</tt>; they are not strings:
    <a name="@default359"></a>
    <a name="@default360"></a>
    <a name="@default361"></a>
    <a name="@default362"></a>
    <a name="@default363"></a>
    <a name="@default364"></a></p><pre class="verbatim">&gt;&gt;&gt; type(True)
    &lt;type 'bool'&gt;
    &gt;&gt;&gt; type(False)
    &lt;type 'bool'&gt;
    </pre><p>The <tt>==</tt> operator is one of the <b>relational operators</b>; the
    others are:</p><pre class="verbatim">      x != y               # x is not equal to y
          x &gt; y                # x is greater than y
          x &lt; y                # x is less than y
          x &gt;= y               # x is greater than or equal to y
          x &lt;= y               # x is less than or equal to y
    </pre><p>Although these operations are probably familiar to you, the Python
    symbols are different from the mathematical symbols. A common error
    is to use a single equal sign (<tt>=</tt>) instead of a double equal sign
    (<tt>==</tt>). Remember that <tt>=</tt> is an assignment operator and
    <tt>==</tt> is a relational operator. There is no such thing as
    <tt>=&lt;</tt> or <tt>=&gt;</tt>.
    <a name="@default365"></a>
    <a name="@default366"></a></p>`,
    `<p>
    <a name="@default367"></a>
    <a name="@default368"></a></p><p>There are three <b>logical operators</b>: <tt>and</tt>, <tt>or</tt>, and <tt>not</tt>. The semantics (meaning) of these operators is
    similar to their meaning in English. For example,
    <tt>x &gt; 0 and x &lt; 10</tt> is true only if <tt>x</tt> is greater than 0
    <em>and</em> less than 10.
    <a name="@default369"></a>
    <a name="@default370"></a>
    <a name="@default371"></a>
    <a name="@default372"></a>
    <a name="@default373"></a>
    <a name="@default374"></a></p><p><tt>n%2 == 0 or n%3 == 0</tt> is true if <em>either</em> of the conditions
    is true, that is, if the number is divisible by 2 <em>or</em> 3.</p><p>Finally, the <tt>not</tt> operator negates a boolean
    expression, so <tt>not (x &gt; y)</tt> is true if <tt>x &gt; y</tt> is false,
    that is, if <tt>x</tt> is less than or equal to <tt>y</tt>.</p><p>Strictly speaking, the operands of the logical operators should be
    boolean expressions, but Python is not very strict.
    Any nonzero number is interpreted as “true.”</p><pre class="verbatim">&gt;&gt;&gt; 17 and True
    True
    </pre><p>This flexibility can be useful, but there are some subtleties to
    it that might be confusing. You might want to avoid it (unless
    you know what you are doing).</p>`]

export const get: RequestHandler = async () => {
    return { body: JSON.stringify({ text: "Need some help? Maybe this helps solving the exercise:", headings, contents, timestamp: new Date().getTime() }) };
};
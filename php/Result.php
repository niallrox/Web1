<?php
function drawResult($answer)
{ ?>
    <tr class="resultFromPhp">
        <th class="resultX"><?php echo $answer[0] ?></th>
        <th class="resultYRRes"><?php echo $answer[1] ?></th>
        <th class="resultYRRes"><?php echo $answer[2] ?></th>
        <th class="resultYRRes"><?php echo $answer[3] ?></th>
        <th class="resultTimeB"><?php echo $answer[4] ?></th>
        <th class="resultTimeB"><?php echo $answer[5] ?> мсек</th>
    </tr>
    <?php
}